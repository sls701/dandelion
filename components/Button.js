import React, {useRef} from 'react';
import { Text, View, StyleSheet, Pressable, Animated } from 'react-native';

export default Button = (props) => {
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
    <Animated.View style={{opacity: fadeAnim}}>
      <Pressable style={[styles.button, props.position, props.style]} onPressIn={fadeIn} onPressOut={fadeOut} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
    width: 280,
    backgroundColor: '#F9CD54',
    borderRadius: 12,
  },
  text: {
    fontFamily: 'Segoe-Semibold',
    fontSize: 18,
    lineHeight: 20,
    color: 'black',
  },
  pressed: {
    opacity: 0.8,
  },
});