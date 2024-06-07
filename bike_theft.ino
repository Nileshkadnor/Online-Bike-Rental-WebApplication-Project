#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <ThingSpeak.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <TinyGPS++.h>

// WiFi credentials
const char* ssid = "POCO F1";       // your network SSID (name)
const char* password = "12345678";  // your network password

// ThingSpeak credentials
unsigned long myChannelNumber = 2531734;
const char* myWriteAPIKey = "2EPHOV96CC8A87J8";

// Relay control pin
const int relayPin = D5;  // Assuming GPIO5 on ESP8266 for relay control

// GPS module connected to ESP8266 RX and TX
TinyGPSPlus gps;
WiFiClient client;


ESP8266WebServer server(80);

bool relayState = false;

void setup() {
  Serial.begin(9600);
  Serial.println("ESP8266 Relay Control");

  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");

  // Initialize relay pin
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW);

  // Setup server routes
  server.on("/", handleRoot);
  server.on("/relay", handleRelay);
  server.begin();

  Serial.println("HTTP server started");
  Serial.println(WiFi.localIP());  // Corrected line

  // Initialize ThingSpeak
  ThingSpeak.begin(client);
}

void loop() {
  server.handleClient();

  while (Serial.available() > 0) {
    if (gps.encode(Serial.read())) {
      if (gps.location.isValid()) {
        float lat = static_cast<float>(gps.location.lat());
        float lng = static_cast<float>(gps.location.lng());
        // Display on Serial Monitor
        Serial.print("Latitude: ");
        Serial.println(lat, 6);
        Serial.print("Longitude: ");
        Serial.println(lng, 6);
        // Send the data to ThingSpeak
        ThingSpeak.setField(1, lat);
        ThingSpeak.setField(2, lng);

        int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
        if (x == 200) {
          Serial.println("Location sent to ThingSpeak.");
        } else {
          Serial.println("Problem sending to ThingSpeak.");
        }
      }
    }
  }
}

void handleRoot() {
  String html = "<html><head><style>";
  html += "html { font-family: Helvetica; display: inline-block; margin: 0px auto; text-align: center; }";
  html += ".button { background-color: #195B6A; border: none; color: white; padding: 16px 40px;";
  html += "text-decoration: none; font-size: 30px; margin: 2px; cursor: pointer; }";
  html += ".button2 { background-color: #77878A; }";
  html += "</style></head><body>";
  html += "<h1>ESP8266 Relay Control</h1>";
  html += "<p>Relay State: " + String(relayState ? "ON" : "OFF") + "</p>";
  html += "<form method='POST' action='/relay'>";
  html += "<button class='button' type='submit'>Toggle Relay</button>";
  html += "</form>";
  html += "</body></html>";
  server.send(200, "text/html", html);
}


void handleRelay() {
  relayState = !relayState;
  digitalWrite(relayPin, relayState ? HIGH : LOW);
  server.sendHeader("Location", "/");
  server.send(303);
}
