import React, { Component } from 'react';
import bikeIcon from './bike-icon.png';

class TrackBike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 20.096390,
            longitude: 73.927102
        };
    }

    componentDidMount() {
        this.initMap();
        this.fetchDataFromThingSpeak();
        this.interval = setInterval(this.fetchDataFromThingSpeak, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    initMap = () => {
        const { latitude, longitude } = this.state;
        const bikeLocation = { lat: latitude, lng: longitude };

        this.map = new window.google.maps.Map(document.getElementById("map"), {
            center: bikeLocation,
            zoom: 15,
        });
   
        this.bikeMarker = new window.google.maps.Marker({
            position: bikeLocation,
            map: this.map,
            title: "Bike Location",
            
            icon: {
              
                url: bikeIcon,
                scaledSize: new window.google.maps.Size(35, 35),
            },
        });

        document.getElementById("bikeLocation").innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
    };

    updateBikeLocation = (latitude, longitude) => {
        const bikeLocation = new window.google.maps.LatLng(latitude, longitude);
        this.bikeMarker.setPosition(bikeLocation);
        this.map.panTo(bikeLocation);
        document.getElementById("bikeLocation").innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
    };

    fetchDataFromThingSpeak = () => {
        fetch('https://api.thingspeak.com/channels/2531734/feeds.json?results=1')
            .then(response => response.json())
            .then(data => {
                const latitude = parseFloat(data.feeds[0].field1);
                const longitude = parseFloat(data.feeds[0].field2);
                this.setState({ latitude, longitude });
                this.updateBikeLocation(latitude, longitude);
            })
            .catch(error => console.error('Error fetching data from ThingSpeak:', error));
    };

    render() {
        return (
            <div className="container">
                <h2>Track Bike</h2>
                <div id="bikeLocation"></div>
                <div id="map" style={{ height: '400px', marginBottom: '20px' }}></div>
            </div>
        );
    }
}

export default TrackBike;
