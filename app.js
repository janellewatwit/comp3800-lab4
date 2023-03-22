const express = require('express')

// Twilio account config
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// Create express app
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


// APP 1
app.post('/voice', (_, res) => {
	const twiml = new VoiceResponse();
	twiml.play({}, 'http://134.209.217.31:3000/lab4');

	res.type('text/xml').send(twiml.toString());
});

app.get('/lab4', (_, res) => {
	res.sendFile('/root/app/public/ihadfunwhiledoinglabnumber4.mp3')
})


// APP 2
app.post('/sms', (req, _) => {
	client.calls
	.create({
		twiml: `<Response><Dial>${req.body.Body}</Dial></Response>`,
		to: req.body.From,
		from: '+14754739489'
	})
	.then(call => console.log(call.sid));
});


// Express app listen on port 3000
app.listen(3000);
