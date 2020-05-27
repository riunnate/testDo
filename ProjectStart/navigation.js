import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './login.js'
import Main from './main.js'
import TodoList from './todoList.js';
import AwsTest from './awstest.js'
class navigation extends React.Component {
    render() {
        return (
            <View>
                <Login/>
                <Main/>
                <TodoList/>
                <AwsTest/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: Login,
        Main : Main,
        TodoList : TodoList,
        AwsTest : AwsTest,
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);