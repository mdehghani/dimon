const db = require('../models');
const Promise = require("bluebird")
const bcrypt = Promise.promisifyAll(require('bcrypt'));

function randomNumber(digits) {
    var min = Math.pow(10, digits - 1);
    var max = min * 10;
    return Math.floor(min + Math.random() * (max - min));
}

module.exports = {
	create: function(username, password, phone, role) {
		return bcrypt.genSaltAsync(10)
              .then(function(salt) {
       		return bcrypt.hashAsync(password, salt)
       	})
              .then(function(hash) {
                     password = hash;
                     var code = randomNumber(4);
                     return db.User.create({
                            username,
                            password,
                            tempPhone: phone,
                            phoneCode: code,
                            role: role
                     });
              });
	},
    verify: function(phone, code, deviceId, simSerial) {
        return db.User.update({active: true, phone: phone, tempPhone: null, code: null, deviceId, simSerial}, {where: {tempPhone: phone, phoneCode: code}})
        .then(function(result) {
            return !!result[0];
        })
    },
    findByUsernameAndPassword: function(username, password) {
      return db.User.findOne({username: username})
      .then(function(user) {
        if (!user) return null;
        return bcrypt.compareAsync(password, user.password)
        .then(function(equals) {
          if (!equals) return null;
          return user;
        })
      })
    }
}