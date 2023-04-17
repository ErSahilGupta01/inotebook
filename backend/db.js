const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://sahil:sahil@cluster0.sro16qf.mongodb.net/test"

mongoose.set('strictQuery', false);

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then((res) => {
        console.log("Database connected to", res.connection.name);
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectToMongo;
