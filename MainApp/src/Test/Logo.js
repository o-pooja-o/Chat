import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.jpg';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoImg} style={styles.image} />
                <Text style={styles.text}>DEFTBOX</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'column',
        marginTop:50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
       // borderColor:'red'

    },
    image: {
        width: 160,
        height: 160,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
     marginTop: 10,
        fontSize:20,
        opacity:0.7
    },
});