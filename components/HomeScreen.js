import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, Touchable, StatusBar, Image, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Icon} from 'react-native-eva-icons';
import DandelionText from '../assets/svgs/DandelionText';

export default HomeScreen = ({navigation}) => {
    const width = useWindowDimensions().width;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView bounces={false}>
                <View style={[styles.topNavBar, {width: width}]}>
                    <Icon name='menu-outline' height={40} width={40} fill='#707070'/>
                    <DandelionText />
                    <Icon name='paper-plane-outline' height={34} width={34} fill='#EBA900' />
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topNavBar: {
        flexDirection: 'row',
        backgroundColor: '#FFE59F',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
});

// <Image source={require('../assets/images/HomeScreen.png')} resizeMode='contain' style={{width: width, marginTop: -70}}/>