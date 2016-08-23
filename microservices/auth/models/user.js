"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: sequelize.UUIDV4  
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    tempEmail: DataTypes.STRING,
    phone: DataTypes.STRING,
    tempPhone: DataTypes.STRING,
    emailCode: DataTypes.STRING,
    phoneCode: DataTypes.STRING,
    emailCodeDate: DataTypes.DATE,
    phoneCodeDate: DataTypes.DATE,
    permission: DataTypes.INTEGER,
    deviceId: DataTypes.STRING,
    simSerial: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM('sender', 'receiver'),
      defaultValue: 'sender'
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    removed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  return User;
};