const express = require('express')
const usersRoutes = require('../task2/routes/users')
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 5000;
const dbURL = "mongodb+srv://08166963808Ope:08166963808Ope@atlascluster.br6cder.mongodb.net/node-opsydee?retryWrites=true&w=majority";
mongoose.connect(dbURL)
    .then((result) => app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`)))
    .catch((err) => console.log(err));

app.use(express.json());

app.use('/api', usersRoutes)

app.get('/', (req, res) => {
    res.send("Personal details for various users");
})