const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongoose.connect('mongodb+srv://pathakpranav93:happy123@cluster-saarthi.813ngbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Saarthi')
', 
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Contact form endpoint
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await Contact.create({ name, email, message });
    res.status(200).json({ success: true, message: "Form submitted!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving message" });
  }
});

// Serve HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
