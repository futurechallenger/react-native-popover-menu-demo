/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './js/Button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Prop = {};

type State = {
  open: boolean,
  top: ?number,
  left: ?number,
};

export default class App extends Component<Props, State> {
  state: State = {
    open: false,
    top: null,
    left: null,
  };

  openMenu = ({ top, left }) => {
    this.setState({
      top,
      left,
      open: true,
    });
  };

  closeMenu = () => {
    this.setState({
      top: null,
      left: null,
      open: false,
    });
  };

  renderMenu = () => {
    const { top, left, open } = this.state;
    if (!open) {
      return null;
    }

    return (
      <View
        style={{
          position: 'absolute',
          left,
          top,
          width: 100,
          height: 200,
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
        }}
      >
        <Text>Menu</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.closeMenu}>
          <Text>Close Menu</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button onPress={this.openMenu} text="Show Menu" />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {this.renderMenu()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
