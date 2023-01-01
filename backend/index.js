const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer');

dotenv.config();

app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => {
        console.log('Mongoose connected!');
    })
    .catch(e => {
        console.log('Mongoose not connected!');
        console.log(e);
    })


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
    return res.status(200).json('File has been uploaded.');
});




app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);





















app.listen(5000, () => {
    console.log('Server 5000 running!');
})