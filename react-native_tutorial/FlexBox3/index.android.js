import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class AlignItemsBasics extends Component {
  render(){
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
      <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('FlexBox3', () => AlignItemsBasics);
