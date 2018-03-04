/**
 * Created by Uncle Charlie, 2018/03/01
 * @flow
 */

import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

type Prop = {
  text: ?string,
  onPress: (e?: any) => void,
  styles?: { button: any, text: any },
};

export default class Button extends React.Component<Prop, {}> {
  static defaultProps = {
    text: 'Show Menu',
  };

  handlePress = () => {
    const { onPress } = this.props;

    if (!this.container) {
      console.error('container view is empty');
      return;
    }

    this.container.measure((x, y, w, h, px, py) => {
      console.log('===>measure', { x, y, w, h, px, py });
      onPress && onPress({ left: x, top: y + h });
    });
  };

  onLayout = () => {};

  render() {
    const { text, styles } = this.props;
    const wrapper =
      styles && styles.wrapper ? styles.wrapper : innerStyles.wrapper;
    return (
      <View
        style={wrapper}
        onLayout={this.onLayout}
        ref={container => (this.container = container)}
      >
        <TouchableOpacity onPress={this.handlePress}>
          <View>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const innerStyles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
