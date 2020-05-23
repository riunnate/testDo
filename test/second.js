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

export default class Second extends Component{
    render()
    {
      return(
        <View style = {styles.container}>
          <TouchableOpacity>
              <Text>
                123123
              </Text>
          </TouchableOpacity>
        </View>
      );
    }

   
}

const styles = StyleSheet.create({
  
});
