const io = require('socket.io')();
const uuidv1 = require('uuid/v1');
const messageHandler = require('./handlers/message.handler');

const users = {};
// let currentUserId = 2;

function createAvatar() {
	const num1 = Math.round(Math.random() * 200 + 100);
	const num2 = Math.round(Math.random() * 200 + 100);
	return `https://placeimg.com/${num1}/${num2}/any`;
}

function createUsersOnline() {
	const values = Object.values(users);
	const filteredValues = values.filter((u) => u.username !== undefined);
	return filteredValues;
}

io.on('connection', (socket) => {
	console.log('a user is connected');
	// console.log(socket.id);
	users[socket.id] = { userId: uuidv1() };
	// users{
	//     username:..
	//     userId:..
	// }

	// socket.on('join', (username) => {
	// 	users[socket.id].username = username;
	// 	users[socket.id].avatar = createAvatar();
	// 	messageHandler.handleMessage(socket, users);
	// });

	socket.on('disconnect', () => {
		delete users[socket.id];
		io.emit('action', {
			type: 'users_online',
			data: createUsersOnline()
		});
	});
	socket.on('action', (action) => {
		switch (action.type) {
			// case 'server/hello':
			// 	console.log('Got event', action.data);
			// 	socket.emit('action', { type: 'message', data: 'Good day!' });
			// 	break;
			case 'server/join':
				console.log('got joined', action.data);
				users[socket.id].username = action.data;
				io.emit('action', {
					type: 'users_online',
					data: createUsersOnline()
				});
				socket.emit('action', { type: 'self-user', data: users[socket.id] });
				break;
			case 'server/private_message':
				console.log('got a private message', action.data);
				const conversationId = action.data.conversationId;
				const from = users[socket.id].userId;
				const userValues = Object.values(users);
				const socketIds = Object.keys(users);
				for (let i = 0; i < userValues.length; i++) {
					if (userValues[i].userId === conversationId) {
						const socketId = socketIds[i];
						io.sockets.sockets[socketId].emit('action', {
							type: 'private_message',
							data: {
								...action.data,
								conversationId: from
							}
						});
						break;
					}
				}
				break;
		}
	});
});

io.listen(5736);
