const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/lindungi-karyamu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define Schema
const workSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: String,
    filePath: String,
});

const Work = mongoose.model('Work', workSchema);

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    },
});

const upload = multer({ storage });

// API endpoint to upload work
app.post('/api/upload', upload.single('file'), async (req, res) => {
    const { title, description, author } = req.body;
    const filePath = req.file.path;

    const newWork = new Work({ title, description, author, filePath });
    await newWork.save();
    res.status(201).json({ message: 'Karya berhasil diupload!', work: newWork });
});

// API endpoint to get all works
app.get('/api/works', async (req, res) => {
    const works = await Work.find();
    res.json(works);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
