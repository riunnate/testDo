
import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import First from './first.js'
import Second from './second.js'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <Router>
                <Scene key="root">
                    <Scene key = "First" component = {First} title = "firsttest" initial = "First"/>
                    <Scene key = "Second" component = {Second} title = "secondtest"/>
                </Scene>
            </Router>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00BFFF'
    },
});

export default App;
