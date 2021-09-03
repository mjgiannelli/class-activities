const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  username: {
    type: String,
    required: 'Password is required',
    trim: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 6,
    required: 'Password is required'
  },
  email: {
    type: String,
    unique: true,
    match: /.+\@.+\..+/
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
  //
});

const User = model('User', UserSchema);

module.exports = User;
