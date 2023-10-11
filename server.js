const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const path = require('path');

// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname, 'build')));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3000/Contact'];
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array or if it's undefined (e.g., a same-origin request)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  allowedHeaders: ['Content-Type', 'Authorization'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

const myEmail = process.env.CONTACT_EMAIL;
const myPassword = process.env.CONTACT_PASS;



async function mainMail(name, email, phone, subject, message) {
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: myPassword,
    },
  });

  const mailOptions = {
    from: name,
    to: myEmail,
    subject: subject,
    html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>`,
  };
  try {
    await contactEmail.sendMail(mailOptions);
    return new Promise((resolve) => {
      resolve('Message Sent Successfully');
    });
  } catch (error) {
    return new Promise((_, reject) => {
      reject(error);
    });
  }
}


app.post('/Contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    await mainMail(name, email, phone, subject, message);
    res.status(200).json({ code: 200, message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ code: 500, message: 'Something went wrong' });
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// server used to send send emails

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`);
});
