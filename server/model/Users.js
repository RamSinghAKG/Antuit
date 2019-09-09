const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: { type : String , unique : true, required : true },
  name: String,
  password: { type: String, default: 'welcome123#' },
  email: String,
  role: String,
  client: String,
});
mongoose.model('User', userSchema);