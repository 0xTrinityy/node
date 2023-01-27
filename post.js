const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/send-message', (req, res) => {
  // req.body will contain the message sent in the request
  const message = req.body.message;
  console.log(message);
  // you can send the message to the external endpoint using the built-in http module
  // or any other library of your choice here
  res.send('Message sent successfully');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

//curl -X POST -H "Content-Type: application/json" -d '{"message":"we are in Paris"}' http://localhost:3000/send-message