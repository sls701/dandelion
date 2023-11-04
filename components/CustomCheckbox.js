import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Animated } from 'react-native';

export default CustomCheckbox = (props) => {
    return (
        <Pressable style={[styles.checkboxBase, props.checked && styles.checkboxChecked]} onPress={props.onChange}></Pressable>
    );
};

const styles = StyleSheet.create({
    checkboxBase: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#F9CD54',
        backgroundColor: 'transparent',
    },
    checkboxChecked: {
        backgroundColor: '#F9CD54',
    },
});