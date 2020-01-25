import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Image,
	ImageBackground,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native';
import bgSrc from '../images/stitch.jpg';
import Logo from '../Test/Logo';
import { useDispatch } from 'react-redux';
import { navigation } from 'react-navigation';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export default (LoginScreen = ({ navigation }) => {
	const [ username, setUsername ] = useState('');
	const dispatch = useDispatch();

	return (
		<ImageBackground position="absolute" style={styles.picture} source={bgSrc}>
			<KeyboardAvoidingView behavior="padding">
				<View style={styles.container}>
					<Logo />

					<View style={styles.formWrapper}>
						<View style={styles.formRow}>
							<TextInput
								style={styles.textInput}
								placeholder={'username'}
								value={username}
								onChangeText={(text) => setUsername(text)}
							/>
						</View>
						<View style={styles.formRow}>
							<TextInput style={styles.textInput} placeholder={'password'} />
						</View>
						<View
							style={{
								flexDirection: 'row',
								flex: 1,
								height: 50,
								justifyContent: 'space-between',
								marginVertical: 0
							}}
						>
							<TouchableOpacity
								onPress={() => {
									dispatch({ type: 'server/join', data: username });
									navigation.navigate('Home');
								}}
								style={styles.submitButton}
							>
								<Text style={styles.buttonText}>Login</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('SignUp');
								}}
								style={styles.submitButton}
							>
								<Text style={styles.buttonText}>SignUp</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
});

const styles = StyleSheet.create({
	container: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderWidth: 1
		//borderColor:'red'
	},
	buttonText: {
		fontSize: 18,
		margin: 30,
		textAlign: 'center',
		color: 'white'
	},
	formWrapper: {
		//flex: 1,
		marginTop: 140,
		height: 300
		//borderWidth:1,
		//borderColor:'red'
		//  justifyContent:'space-around'
	},

	formRow: {
		width: WIDTH - 60,
		fontSize: 16,
		// color: 'black',
		//marginVertical: 13,
		height: 45,
		borderWidth: 1,
		borderColor: 'grey',
		backgroundColor: 'white',
		borderRadius: 30,
		//   marginLeft: 30,
		// marginRight: 30,
		// justifyContent: 'space-between',
		paddingLeft: 10,
		marginVertical: 10,
		marginHorizontal: 20
	},
	textInput: {
		//backgroundColor:'#ddd',
		height: 40,
		color: '#333'
	},
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover'
	},
	submitButton: {
		width: WIDTH - 250,
		height: 45,
		backgroundColor: '#000',
		borderRadius: 30,
		marginLeft: 20,
		marginRight: 30,
		marginTop: 15,
		justifyContent: 'center',
		paddingLeft: 10,
		borderColor: 'white',
		borderWidth: 1,
		opacity: 0.9,
		position: 'relative',
		flexDirection: 'row',
		alignItems: 'center'
	}
});
