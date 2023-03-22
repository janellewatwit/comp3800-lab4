const express = require('express')
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (_, res) => {
	const twiml = new VoiceResponse();
	twiml.play({}, 'http://134.209.217.31:3000/lab4');

	res.type('text/xml').send(twiml.toString());
});

app.get('/lab4', (_, res) => {
	res.sendFile('/root/app/public/ihadfunwhiledoinglabnumber4.mp3')
})

app.listen(3000);
