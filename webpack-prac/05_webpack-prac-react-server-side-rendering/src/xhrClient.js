const Axois = require('axios');
// Running in browser? 
// if so use /api and proxy to backend server
// else use localhost:3001
//const baseURL = typeof window !== 'undefined' ? 'http://localhost:3001/api' : 'http://localhost:3001/api';
const baseURL = typeof window !== 'undefined' ? '/api' : 'http://localhost:3001/api';
//const headers = {"Access-Control-Allow-Origin": "http://www.example.com"};
const xhrClient = Axois.create({baseURL});
module.exports = xhrClient;