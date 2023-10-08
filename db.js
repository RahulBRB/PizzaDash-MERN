const mongoose = require('mongoose');
var mongoURL='mongodb+srv://user:pass@cluster0.gjgiqlu.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection
db.on('connected',()=>{
    console.log('Database connection established');
})

db.on('error',()=>{
    console.log('Database connection error');
})

module.exports = mongoose
