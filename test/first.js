import React, {Component} from 'react';

import{
    AppRegistry,
    StyleSheet, 
    Text, 
    View,
    TextInput,
    Image,
    TouchableOpacity
}from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class First extends Component{
    render()
    {
      return(
        <View style = {styles.container}>
          <TouchableOpacity onPress={() => this.onPon()}  onPress = {() => Actions.Second()}>
              <Text>
                asdaSd
              </Text>
          </TouchableOpacity>
        </View>
      );
    }
    onPon(){
      console.log("asdasdasd")
    }
   
}

const styles = StyleSheet.create({
  
});
