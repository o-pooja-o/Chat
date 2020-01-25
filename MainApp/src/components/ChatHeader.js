import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { Text, Header, Left, Body, Right, Button, Icon, Thumbnail, Picker,View } from 'native-base';
import navigation from 'react-native-navigation'
import {withNavigation} from 'react-navigation';



 class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        const {navigation}=this.props.navigation;
    }
    render() {
       
        return (
            <Header style={styles.header}>
                <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button transparent  onPress={()=> this.props.navigation.navigate('ChatList')}>
                        <Icon style={[styles.icon, { fontSize: 28, marginLeft: 0 }]} name='arrow-back' />
                    </Button>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Profile')}>
                        <View style={{flexDirection:'row'}}>
                    <Thumbnail
                        small
                        source={require('../../assets/stitch1.jpg')} />
                    <Text style={styles.title}>Kumar Pratik</Text>
                    </View>
                    </TouchableOpacity>
                </Body>
               
            </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },
    title: {
        color: '#788',
        fontWeight: '600',
        fontSize: 20,
        marginLeft: 5
    },
    icon: {
        color: '#000'
    }
})
export default withNavigation(ChatHeader);