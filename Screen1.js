'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Screen1 extends Component {

  constructor(props) {
    super(props);

    this._onPress = this._onPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is Screen 1</Text>
        <TouchableHighlight
          onPress={this._onPress}>
          <Text>Jump to screen 2</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onPress() {
    this.props.navigator.push({
      name: 'screen_2',
      data: {}
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'coral'
  },
});
