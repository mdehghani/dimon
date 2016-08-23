var authenticate = function(socket, next) {
	console.log(1);
	if (socket.request.headers.cookie) return next();
	console.log('error');
	next(new Error('Authentication error'));
}

var set = function(io) {
	io.set('origins', '*:*');
	var transfer = io.of('/transfer');
	transfer.use(authenticate);
	transfer.on('connection', function (socket) {
		console.log('connected');
	  socket.on('/send/req', function (data) {
	    console.log(data);
	  });
	});
}

module.exports = {set: set};