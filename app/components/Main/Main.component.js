import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Main.component.style';

export default class Main extends Component {
    render() {
        const { wrapper, welcomeText } = styles;
        const username = this.props.navigation.getParam('username', '');
        return (
            <View style={wrapper}>
                <Text style={welcomeText}> Login with username: {username} </Text>
            </View>
        );
    }
}
