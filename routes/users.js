const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pin");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  email: String,
  birthdate: Date,
  password: String,
  profileImage: String,
  bords: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

// Adding passport-local-mongoose plugin to the userSchema
userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
