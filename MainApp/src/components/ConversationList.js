import React, { PureComponent } from 'react';
// import {FlatList} from 'react-native-gesture-handler'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Navigation } from 'react-native-navigation';

export default function ConversationList({ navigation }) {
	const usersOnline = useSelector((state) => state.usersOnline);
	// console.log('usersOnline', usersOnline);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={usersOnline}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Chat', { name: item.username, userId: item.userId })}>
							{/* passing username to chatheader */}
							<View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
								<Image
									style={{ width: 70, height: 70, borderRadius: 50 }}
									source={require('../../assets/stitch1.jpg')}
								/>
								<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
									<Text style={{ fontSize: 20 }}> {item.username}</Text>
								</View>
							</View>
						</TouchableOpacity>
					);
				}}
				keyExtractor={(item) => item.userId}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	avatar: {
		width: 100,
		height: 100
	}
});
