import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Todo')}>
                    <Text style={{fontSize:30, fontWeight:'bold',color:'white'}}>Todo List(dohwan)</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1c1a55'
    },
});