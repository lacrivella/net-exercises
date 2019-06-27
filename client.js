const { createConnection } = require('net');

const from = 'totesbeyonce@email.com';
const to = 'ellencrivella@gmail.com';

const email =  
`FROM: "Beyonce" <${from}>
To: "Ellen Crivella" <${to}>
Date: ${new Date()}
Subject: Whatever you want

Hoi hoi. Your FLS is learning how to take advantage of emails \r\n.\r\n
`;

//you must have the dns?
const mailServerAddress = 'gmail-smtp-in.l.google.com';

//number sotp server use
const client = createConnection(25, mailServerAddress, () => {
  console.log('connected');
  client.write('hello');
});

//HELO email is your domain name
const steps = [
  'HELO la.com\n',
  `MAIL FROM: <${from}>\n`,
  `RCPT TO: <${to}>\n`,
  'DATA\n',
  email,
  'QUIT\n'
];

let step = 0;
client.on('data', data => {
  console.log(data.toString());

  if(step === steps.length) return client.end();
  client.write(steps[step]);
  step++;
});
