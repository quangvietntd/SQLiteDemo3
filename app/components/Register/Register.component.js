import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FloatingLabel from 'react-native-floating-labels';
import SQLite from 'react-native-sqlite-storage';

import styles from './Register.component.style';
import MyButton from '../MyButton/MyButton.component';

let db;
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        };
    }
    
    componentDidMount() {
        db = SQLite.openDatabase({ name: "dataDB", createFromLocation: "~data.db" },
            this.openSuccess, this.openError);
    }

    // componentWillUnmount() {
    //     this.closeDatabase();
    // }

    openSuccess() {
        console.log("Database is opened");
    }

    openError(err) {
        console.log("error: ", err);
    }

    // closeDatabase = () => {
    //     if (db) {
    //         console.log("Closing database ...");
    //         db.close();
    //     } else {
    //         console.log("Database was not OPENED");
    //     }
    // }
    onRegisterPress() {
        const { username, password, confirmPassword } = this.state;
        if (username === '' || password === '') {
            alert('Please enter your username and password!');
            return;
        }
        if (password !== confirmPassword) {
            alert('Password and Confirm Password does not match!');
            return;
        }
        db.transaction((tx) => {
            let sql = `SELECT * FROM users WHERE username='${username}'`;
            tx.executeSql(sql, [], (tx, results) => {
                const len = results.rows.length;
                if (len===0) {
                    let sql = `INSERT INTO users (username, password) VALUES ("${username}", ${password})`;
                    tx.executeSql(sql, [], (tx, results) => {
                        alert('Register successfuly!');
                    });
                } else {
                    alert('This username is used! Please choose another username.');
                    return;
                }
            });
          
        });
    }

    render() {
        const { wrapper, header, labelInput, input, formInput, loginLabel } = styles;
        const propsFloatingLabel = {
            labelStyle: labelInput,
            inputStyle: input,
            style: formInput
        }
        return (
            <View style={wrapper}>
                <Text style={header}>Register</Text>
                <FloatingLabel
                    {...propsFloatingLabel}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                >Username</FloatingLabel>
                <FloatingLabel
                    {...propsFloatingLabel}
                    secureTextEntry
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                >Password</FloatingLabel>
                <FloatingLabel
                    {...propsFloatingLabel}
                    secureTextEntry
                    onChangeText={(text) => this.setState({ confirmPassword: text })}
                    value={this.state.confirmPassword}
                >Confirm Password</FloatingLabel>
                <MyButton
                    label='Register'
                    onPress={() => this.onRegisterPress()}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={loginLabel}>Login?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

