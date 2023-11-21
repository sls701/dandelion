import React, {useState,} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CircleBackButton from '../CircleBackButton';
import Button from '../Button';
import ToggleVisibility from '../../hooks/ToggleVisibility';
import Eye from '../../assets/svgs/Eye';
import SeedPath from '../../assets/svgs/SeedPath';
import ErrorMessage from '../ErrorMessage';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default CreateAccount = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { passwordVisibility, iconShown, handlePasswordVisibility } = ToggleVisibility();

    async function signUp() {
        try {
            if (email['text'] !== '' && password['text'] !== '') {
                await createUserWithEmailAndPassword(auth, email['text'], password['text']);
                const user = userCredential.user;
                navigation.navigate('ChooseCountries')
            }
            } catch (error) {
                console.log(error.message);
            }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <SafeAreaView style={styles.container}>
                <SeedPath style={{position: 'absolute', top: 0, right: -10}}/>
                <CircleBackButton position={{marginTop: 140}} onPress={() => navigation.navigate('Onboarding')}/>
                <Text style={styles.title}>Create {'\n'}Account</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignSelf: 'stretch'}}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={[styles.label]}>First Name</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setFirstName({ text })} autoCapitalize='words' maxLength={35} placeholder='---'/>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Text style={[styles.label]}>Last Name</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setLastName({ text })} autoCapitalize='words' maxLength={35} placeholder='---'/>
                    </View>
                </View> 
                <Text style={[styles.label, {marginLeft: 40}]}>Email</Text>
                <TextInput style={[styles.input, {width: 312}]} onChangeText={(text) => setEmail({ text })} placeholder='---'/>
                <Text style={[styles.label, {marginLeft: 40}]}>Password</Text>
                <View style={{flexDirection: 'row', marginBottom: 105}}>
                    <TextInput style={[styles.input, {width: 312}]} onChangeText={(text) => setPassword({ text })} secureTextEntry={passwordVisibility} maxLength={20} placeholder='---'/>
                    <Pressable onPress={handlePasswordVisibility} style={styles.icon}>
                        <Eye show={iconShown}/>
                    </Pressable>
                </View>
                <Button title='Next' onPress={signUp}/>
                <StatusBar style="auto" />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

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