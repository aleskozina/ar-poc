const express = require('express');
const path = require('path');
const https = require('http');
const fs = require('fs');

const options = {
    // key: fs.readFileSync('/Users/ales.kozina/Documents/localhost.key', 'utf8'),
    // cert: fs.readFileSync('/Users/ales.kozina/Documents/localhost.cert', 'utf8'),
    requestCert: true,
    rejectUnauthorized: true
};

const app = express();
const port = 8080;

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/index.js', (req, res) => res.sendFile(path.join(__dirname + '/index.js')));
app.get('/aframe-ar.js', (req, res) => res.sendFile(path.join(__dirname + '/aframe-ar.js')));
app.get('/three.js', (req, res) => res.sendFile(path.join(__dirname + '/three.js')));
app.get('/data/data/camera_para.dat', (req, res) => res.sendFile(path.join(__dirname + '/camera_para.dat')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const server = https.createServer( options, app );
