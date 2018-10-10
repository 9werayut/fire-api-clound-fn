const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();
// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
// build multiple CRUD interfaces:
app.get('/', (req, res) => {
  res.send('Hello GET by noomerZx')
});
app.post('/', (req, res) => {
  res.send('Hello POST by noomerZx')
});
app.put('/', (req, res) => {
  res.send('Hello PUT by noomerZx')
});
app.patch('/', (req, res) => {
  res.send('Hello PATCH by noomerZx')
});
app.delete('/', (req, res) => {
  res.send('Hello DELETE by noomerZx')
});
// Expose Express API as a single Cloud Function:
exports.hello = functions.https.onRequest(app);
