const Promise = require("bluebird");
const redis = require("redis");
const client = Promise.promisifyAll(redis.createClient());
const jwt = Promise.promisifyAll(require('jsonwebtoken'));

const secretKey = 'sg92pjfslGq2r6jglkAH3fdSGlk2jRFfaSDF32F@#RSdfralaidjliLJW';
var client = {}

client.check = function(token) {
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