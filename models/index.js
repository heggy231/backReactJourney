const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/way-farer',
//   { useNewUrlParser: true })
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/jwt-auth", {
  useNewUrlParser: true
});
module.exports= {
    Post: require('./Post'),
    User: require('./User')
}
