import React from 'react';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
 
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.5}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 10,
    },

    title: {
        fontFamily: 'Segoe-Semibold',
        fontSize: 30,
        color: '#ECB115',
        textAlign: 'center',
        marginBottom: 10,
    },

    description: {
        fontFamily: 'Segoe-UI',
        fontSize: 16,
        textAlign: 'center',
        color: '#95989A',
        paddingHorizontal: 64,
    },
});