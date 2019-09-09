const mongoose = require('mongoose');
const { Schema } = mongoose;

const permissionSchema = new Schema({
  name: { type : String , unique : true, required : true },
  create: { type : Boolean, default: false},
  write:  { type : Boolean, default: false},
  read:   { type : Boolean, default: false},
  delete: { type : Boolean, default: false}
});
mongoose.model('Permission', permissionSchema);