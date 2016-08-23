var express = require('express');
var router = express.Router();
var userService = require('../services/userService.js');
var authService = require('../services/authService.js');

router.post('/register', function(req, res, next) {
	var {phone, password, role} = req.body;
	userService.create(phone, password, phone, role)
	.then(() => {
		res.ok(true);
	});
});

router.post('/verify', function(req, res, next) {
	var {phone, code, device, sim} = req.body;
	userService.verify(phone, code, device, sim)
	.then((verified) => {
		res.ok(verified);
	});
});

router.post('/login', function(req, res, next) {
	var {username, password} = req.body;
	authService.login(username, password)
	.then(function(token) {
		res.ok({token: token});
	})
});

module.exports = router;