import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class HelloWorldApp extends Component {
  render(){
    return (
      <Text>Hello World</Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
