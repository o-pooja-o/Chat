import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Navigation } from 'react-navigation';
import ChatScreen from './src/screens/ChatScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import Authentication from './src/Auth/Authentication';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreeen';

export const ScreenNavigation = createStackNavigator(
	{
		Home: {
			screen: HomeScreen
		},
		Chat: {
			screen: ChatScreen
		},
		Profile: { screen: ProfileScreen }
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerMode: 'none'
		}
	}
);

export const AuthNavigation = createStackNavigator(
	{
		Login: { screen: LoginScreen },
		SignUp: { screen: SignUpScreen }
	},
	{
		initialRouteName: 'Login',
		headerMode: 'none'
	}
);

export const RootSwitchNavigator = createSwitchNavigator(
	{
		AuthLoading: { screen: Authentication },
		Auth: { screen: AuthNavigation },
		App: { screen: ScreenNavigation }
	},
	{
		initialRouteName: 'AuthLoading'
	}
);

const AppContainer = createAppContainer(RootSwitchNavigator);

export default class Router extends React.Component {
	render() {
		return <AppContainer />;
	}
}
