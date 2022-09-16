const mongoose= require('mongoose')

 const contactosSchema = new mongoose.Schema({
   name: String,
   email: String,
   phone: String,
   surname: String


 });
 const gruposSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  surname: String


});
 module.exports = mongoose.model('grupos', gruposSchema);