import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CircleBackButton from '../CircleBackButton';
import Button from '../Button';
import ToggleVisibility from '../../hooks/ToggleVisibility';
import Eye from '../../assets/svgs/Eye';
import CustomCheckbox from '../CustomCheckbox';
import OrDivider from '../../assets/svgs/OrDivider';

export default SignIn = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { passwordVisibility, iconShown, handlePasswordVisibility } = ToggleVisibility();
    
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={[styles.title, {marginTop: 100}]}>Sign In</Text>
                <Text style={styles.label}>Username or Email</Text>
                <TextInput style={[styles.input, {alignSelf: 'center', width: 312}]}  placeholder='---'/>
                <Text style={styles.label}>Password</Text>
                <View style={{flexDirection: 'row'}}>
                    <TextInput style={[styles.input, {width: 312}]} secureTextEntry={passwordVisibility} maxLength={20} placeholder='---'/>
                    <Pressable onPress={handlePasswordVisibility} style={styles.icon}>
                        <Eye show={iconShown}/>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <CustomCheckbox onChange={() => setChecked(!checked)} checked={checked} />
                    <Text style={[styles.smallText, {marginLeft: 10, marginRight: 70}]}>Remember me</Text>
                    <Text style={[styles.smallText, {fontFamily: 'Segoe-Semibold', color: '#FAB700'}]}>Forgot Password?</Text>
                </View>
                <Button title='Sign In' style={{marginTop: 76}} onPress={() => navigation.navigate('HomeTabs')}/>
                <OrDivider style={{marginVertical: 84}}/>
                <Button title='Create an Account' style={{backgroundColor: '#FFF389'}} onPress={() => navigation.navigate('ChooseCountries')}/>
                <StatusBar style="auto" />
            </View>
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
        fontSize: 14,
        color: '#767676',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 270,
    }
});