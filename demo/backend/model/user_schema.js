const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const user = new Schema({
    first_name : { 
        type : String,
        required : 'firsr_name is required',
        trim : true,
    },
    last_name : { 
        type : String,
        required : 'firsr_name is required',
        trim : true,
    },
    email : { 
        type : String,
        required : 'firsr_name is required',
        trim : true,
        unique : 'email already exists',
        match :/[a-z0-9]+([-+._][a-z0-9]+){0,2}@.*?(\.(a(?:[cdefgilmnoqrstuwxz]|ero|(?:rp|si)a)|b(?:[abdefghijmnorstvwyz]iz)|c(?:[acdfghiklmnoruvxyz]|at|o(?:m|op))|d[ejkmoz]|e(?:[ceghrstu]|du)|f[ijkmor]|g(?:[abdefghilmnpqrstuwy]|ov)|h[kmnrtu]|i(?:[delmnoqrst]|n(?:fo|t))|j(?:[emop]|obs)|k[eghimnprwyz]|l[abcikrstuvy]|m(?:[acdeghklmnopqrstuvwxyz]|il|obi|useum)|n(?:[acefgilopruz]|ame|et)|o(?:m|rg)|p(?:[aefghklmnrstwy]|ro)|qa|r[eosuw]|s[abcdeghijklmnortuvyz]|t(?:[cdfghjklmnoprtvwz]|(?:rav)?el)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])\b){1,2}/,
    }, 
    contact : { 
        type : Number,
        required : 'firsr_name is required',
        trim : true,
        maxlength  : 10
    },
    address : { 
        type : String,
        required : 'firsr_name is required',
        trim : true,
    },
    hashedPassword : {
        type : String,
        required : 'password is required'
    },
    salt : {
        type : String,
    }
})


user
  .virtual('password')
  .set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashedPassword = this.encryptedPassword(password)
  })
  .get(function() {
    return this._password
  })
user.methods = {
  authenticate: function(plainText) {
    return this.encryptedPassword(plainText) === this.hashedPassword
  },
  encryptedPassword: function(password) {
    if (!password) return ''
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex')
    } catch (err) {
      return ''
    }
  },
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + ''
  }
}
user.path('hashedPassword').validate(function(v) {
  if (this.hashedPassword && this._password.length < 6) {
    this.invalidate('password', 'Password must be at least 6 characters long.')
  }
  if (this.isNew && !this._password) {
    this.invalidate('password', 'Password is required.')
  }
}, null)

const User = mongoose.model('User', user);
module.exports = User;