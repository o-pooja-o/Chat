import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SettingTab from '../components/SettingTab';
import ContactTab from '../components/ContactTab';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ConversationList from '../components/ConversationList';
import { createStackNavigator } from 'react-navigation-stack';

export class HomeScreen extends Component {
	render() {
		return <AppTabNavigator />;
	}
}

const ContactStack = createStackNavigator(
	{
		Contact: { screen: ContactTab }
	},
	{
		defaultNavigationOptions: {
			title: 'Contacts'
		}
	}
);
const SettingStack = createStackNavigator(
	{
		Setting: { screen: SettingTab }
	},
	{
		defaultNavigationOptions: {
			title: 'Setting'
		}
	}
);
const ChatStack = createStackNavigator(
	{
		ChatList: { screen: ConversationList }
	},
	{
		defaultNavigationOptions: {
			title: 'ChatList'
		}
	}
);
export default (AppTabNavigator = createMaterialBottomTabNavigator(
	{
		Contact: {
			screen: ContactStack,
			defaultNavigationOptions: {
				tabBarLabel: 'Contacts'
			}
		},

		ChatList: {
			screen: ChatStack,
			defaultNavigationOptions: {
				tabBarLabel: 'ChatList'
			}
		},

		Setting: {
			screen: SettingStack,
			defaultNavigationOptions: {
				tabBarLabel: 'Setting'
			}
		}
	},
	{
		initialRouteName: 'ChatList',
		defaultNavigationOptions: {
			// headerTitle: 'Conversation',
			headerStyle: { backgroundColor: 'white' },
			headerBackTitle: null

			// tabBarVisible: false
		}
		// animationEnabled: true,
		//swipeEnabled: true,
		//tabBarPosition: "bottom",
		/*tabBarOptions: {
           
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }*/
	}
));

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
