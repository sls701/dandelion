import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CircleBackButton from '../components/CircleBackButton';
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import LogoText from '../assets/svgs/LogoText';
import CustomCheckbox from '../components/CustomCheckbox';

export default FinishSignup = ({navigation}) => {
    const [checked, setChecked] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <LogoText style={{width: '90%', height: '90%'}}/>
                <CircleBackButton position={{marginTop: 18}} onPress={() => navigation.navigate('InitializeProfile')}/>
                <Text style={styles.title}>You're almost {'\n'}finished!</Text>
                <Text style={styles.label}>What are some topics that interest you?</Text>
                {/* implement dropdown menu feature with https://www.npmjs.com/package/country-state-city */}
                <TextInput style={[styles.input, {alignSelf: 'center', width: 312}]}  placeholder='---'/>
                <View style={{flexDirection: 'row', padding: 10, marginBottom: 145}}>
                    <CustomCheckbox onChange={() => setChecked(!checked)} checked={checked} />
                    <Text style={[styles.smallText, {marginLeft: 10}]}>I accept the <Text style={[styles.smallText, {color: '#FFBB00'}]}>Terms of Service</Text> and <Text style={[styles.smallText, {color: '#FFBB00'}]}>Privacy Policy</Text></Text>
                </View>
                <Button title='Sign Up' onPress={() => navigation.navigate('HomeTabs')}/>
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
    smallText: {
        fontFamily: 'Segoe-UI',
        fontSize: 13.2,
        color: '#767676',
    }
});