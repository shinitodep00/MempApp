import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import FontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: FontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
          ) : null
        }
      </View>
    );
  }
}

export default CircleButton;

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 24,
    lineHeight: 38,
    color: '#fff',
  },
});
