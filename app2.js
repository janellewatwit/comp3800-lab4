const express = require('express')
const bodyParser = require('body-parser');

require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, _) => {
	client.calls
	.create({
		twiml: `<Response><Dial>${req.body.Body}</Dial></Response>`,
		to: req.body.From,
		from: '+14754739489'
	})
	.then(call => console.log(call.sid));
});

app.listen(3000);
