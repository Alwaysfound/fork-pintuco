const mongoose = require('mongoose')

const uri = "mongodb+srv://dbuser:dbuser1234@cluster0.dyhlo.mongodb.net/pintuco?retryWrites=true&w=majorityPORT=3000";

module.exports = () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,});