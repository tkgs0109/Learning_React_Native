import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LotsOfStyles extends Component{
  render(){
    return(
      <View>
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigblue}>just bigblue</Text>
      <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
      <Text style={[styles.red, styles.biggold, styles.red]}>red, then biggold, then red</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  biggold: {
    color: 'gold',
    fontWeight: 'normal',
    fontSize: 100,
  },
});

AppRegistry.registerComponent('style', () => LotsOfStyles);
