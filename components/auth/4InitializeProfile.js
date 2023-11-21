import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CircleBackButton from '../CircleBackButton';
import Button from '../Button';
import DropDownPicker from 'react-native-dropdown-picker';

export default InitializeProfile = ({navigation}) => {

    return ( 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <CircleBackButton position={{marginTop: 38}} onPress={() => navigation.navigate('ChooseCountries')}/>
                <Text style={styles.title}>Customize {'\n'}Your Profile</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-betweens', alignSelf: 'stretch'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={[styles.input, {marginLeft: 40}]} maxLength={20} placeholder='---'/>
                    </View>
                </View>
                <Text style={styles.label}>What state do you currently live in?</Text>
                {/* implement dropdown menu feature */}
                <TextInput style={[styles.input, {alignSelf: 'center', width: 312, marginBottom: 300}]}  placeholder='---'/>
                <Button title='Next' onPress={() => navigation.navigate('FinishSignup')}/>
                <StatusBar style="auto" />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#FFF3BE',
        height: 50,
        width: 136,
        borderRadius: 16,
        padding: 10,
        fontFamily: 'Segoe-UI',
        fontSize: 16,
        marginVertical: 6,
    },
    title: {
        fontFamily: 'Segoe-Semibold',
        fontSize: 40,
        lineHeight: 40,
        color: '#ECB115',
        alignSelf: 'flex-start',
        marginHorizontal: 40,
        paddingVertical: 20,
    },
    label: {
        fontFamily: 'Segoe-Semibold',
        fontSize: 18,
        color: '#4F4F4F',
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
});

{/*
    <Pressable onPressIn={showDatepicker}>
        <TextInput style={styles.input} keyboardType='numbers-and-punctuation' placeholder="---" editable={false} value={date.toLocaleDateString()}></TextInput>
    </Pressable>  
*/ }