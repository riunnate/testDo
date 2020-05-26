import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class login extends React.Component {
    componentWillMount() {
        this.setState({
            textID: '',
            textPW: '',
        })
      }
    render() {
        return (
            <View style={styles.container}>
                <View style = {{flex : 1, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <Image source={require('./../image/LOGO.png')} style = {{ height : 70, width : 250, resizeMode : 'stretch'}}>
                    </Image>
                </View>
                <View style = {{flex : 2.5}}>
                    <View style = {styles.text}>
                        <TextInput style = {{flex : 1}} onChangeText={(text) => { console.log(text), this.setState({textID: text}) }} value={this.state.textID}>
                        </TextInput>
                    </View>
                    <View style = {styles.text}>
                        <TextInput style = {{flex : 1}} onChangeText={(text) => { console.log(text), this.setState({textPW: text}) }} value={this.state.textPW}>
                        </TextInput>
                    </View>
                    <TouchableOpacity onPress = {this.logIn.bind(this)}>
                        <View style = {{height : 60, borderColor : '#00BFFF', borderWidth : 2, margin : 10, marginLeft : 50, marginRight : 50, backgroundColor : '#4169E1'}} >
                            <Text style = {{fontSize : 25, textAlign : 'center'}}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    logIn(){
        console.log('asd')
        var userID = this.state.textID
        var userPW = this.state.textPW
        console.log(userID)
        console.log(userPW)
        this.props.navigation.navigate('Main')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1E90FF'
    },
    text : {
        height : 60, 
        backgroundColor : 'white',
        borderColor : 'gray' , 
        borderWidth : 2, 
        margin : 10,
        marginLeft : 50,
        marginRight : 50
    }
});