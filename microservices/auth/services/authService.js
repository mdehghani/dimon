const db = require('../models');
const userService = require('./userService.js');
const Promise = require("bluebird");
const uuid = require('uuid');
const redis = require("redis");
const client = Promise.promisifyAll(redis.createClient());
const jwt = Promise.promisifyAll(require('jsonwebtoken'));

const secretKey = 'sg92pjfslGq2r6jglkAH3fdSGlk2jRFfaSDF32F@#RSdfralaidjliLJW';

var auth = {};

function createUserData(user) {
	return {
		username: user.username,
		id: user.id,
		phone: user.phone,
		role: user.role,
		permission: user.permission
	}
}

function createSession(user) {
	var userData = createUserData(user);
	var sessionId = uuid.v4();
	userData.sid = sessionId;
	userData.dt = new Date();

	return client.setAsync(user.username, JSON.stringify(userData))
	.then(function() {
		return userData;
	});
}

auth.login = function(username, password) {
	return userService.findByUsernameAndPassword(username, password)
	.then(function(user) {
		if (!user) return null;
		return createSession(user)
		.then(function(userData) {
			return jwt.signAsync(userData, secretKey, {expiresIn: 24*3600}); //24 hours
		})
	})
}

module.exports = auth;