const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.post('/encrypt', (req, res) => {
  const { data, key } = req.body;

  // Use SHA-256 for hashing the key
  const hashedKey = crypto.createHash('sha256').update(key).digest('hex');

  // Use AES-256-CBC for encryption
  const cipher = crypto.createCipher('aes-256-cbc', hashedKey);
  let encryptedData = cipher.update(data, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');

  res.json({ encryptedData });
});

app.post('/decrypt', (req, res) => {
  const { encryptedData, key } = req.body;

  const hashedKey = crypto.createHash('sha256').update(key).digest('hex');

  const decipher = crypto.createDecipher('aes-256-cbc', hashedKey);
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');

  res.json({ decryptedData });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
