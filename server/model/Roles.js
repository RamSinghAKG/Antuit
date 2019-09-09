const mongoose = require('mongoose');
const { Schema } = mongoose;

const roleSchema = new Schema({
    name: { type : String , unique : true, required : true },
    permission: { type : String, required : true}
  });
  mongoose.model('Role', roleSchema);