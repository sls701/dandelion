import React, {useRef} from 'react';
import {Text, StyleSheet, Pressable, Animated} from 'react-native';
import ArrowSVG from '../assets/svgs/ArrowSVG';

export default CircleBackButton = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 0.5,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

    return (
      <Animated.View style={{opacity: fadeAnim, alignSelf: 'flex-start'}}>
        <Pressable style={[styles.button, props.position]} onPressIn={fadeIn} onPressOut={fadeOut} onPress={props.onPress}>
          <ArrowSVG />
        </Pressable>
      </Animated.View>
    );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    backgroundColor: '#ECB115',
    width: 50,
    height: 50,
    borderRadius: 100,
    padding: 10,
  },
  pressed: {
    opacity: 0.8,
  },
});