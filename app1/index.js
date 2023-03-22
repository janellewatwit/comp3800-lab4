const express = require('express')
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post('/voice', (_, res) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.play({}, 'http://134.209.217.31:3000/lab4');

  // Render the response as XML in reply to the webhook request
  res.type('text/xml');
  res.send(twiml.toString());
});

app.get('/lab4', (_, res) => {
	res.sendFile('/root/app/public/ihadfunwhiledoinglabnumber4.mp3')
})

// Create an HTTP server and listen for requests on port 3000
app.listen(3000, () => {
  console.log(
    'Now listening on port 3000. ' +
    'Be sure to restart when you make code changes!'
  );
});
