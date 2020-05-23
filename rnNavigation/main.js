import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./../rnNavigation/first";
import Todo from "./../rnNavigation/second";

class main extends React.Component {
    render() {
        return (
            <View>
                <Home/>
                <Todo/>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Todo: Todo,
    },
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(AppNavigator);