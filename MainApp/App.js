console.ignoredYellowBox = [ 'Remote debugger' ];
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
	'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

import io from 'socket.io-client';
import Router from './router';
import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
const socket = io('http://192.168.1.17:5736');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const myStore = applyMiddleware(socketIoMiddleware)(createStore)(rootReducer);

myStore.subscribe(() => {
	console.log('new state', myStore.getState());
});

myStore.dispatch({ type: 'server/hello', data: 'hello' });

function rootReducer(state = {}, action) {
	switch (action.type) {
		// case 'message':
		// 	return { ...state, message: action.data };
		// 	break;
		case 'users_online':
			const conversations = { ...state.conversations };
			const usersOnline = action.data;
			for (let i = 0; i < usersOnline.length; i++) {
				const userId = usersOnline[i].userId;
				if (conversations[userId] === undefined) {
					conversations[userId] = {
						messages: [],
						username: usersOnline[i].username
					};
				}
			}
			return { ...state, usersOnline, conversations };
		case 'private_message':
			const conversationId = action.data.conversationId;
			return {
				...state,
				conversations: {
					...state.conversations,
					[conversationId]: {
						...state.conversations[conversationId],
						messages: [ action.data.message, ...state.conversations[conversationId].messages ]
					}
				}
			};
			break;
		case 'self-user':
			return { ...state, selfUser: action.data };
			break;
		default:
			return state;
	}
}

export default function App() {
	return (
		<Provider store={myStore}>
			<Router />
		</Provider>
	);
}
AppRegistry.registerComponent('reduxlearningstarter', () => App);
