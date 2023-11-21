import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import CircleBackButton from '../CircleBackButton';
import SeedPath from '../../assets/svgs/SeedPath';
import { allCountries } from 'country-region-data';

export default Signup = ({navigation}) => {

    // list of countries that users are from
    const pastCountries = ['']

    // list of countries that users live in now
    const currentCountries = ['United States'];

    /*
    const countryArray = Object.entries(allCountries)
    for (country of countryArray) {
        countries.push({label: country[1][0], value: country[1][0]});
    }
    */
    
    // changes state of dropdown for country that the user is from
    const [openFrom, setOpenFrom] = useState(false);
    const [valueFrom, setValueFrom] = useState(null);
    const [itemsFrom, setItemsFrom] = useState(pastCountries);
    const onOpenFrom = useCallback(() => {
        setOpenCurrent(false);
    }, []);

    // changes state of dropdown for country that the user currently lives in
    const [openCurrent, setOpenCurrent] = useState(false);
    const [valueCurrent, setValueCurrent] = useState(null);
    const [itemsCurrent, setItemsCurrent] = useState(currentCountries);
    const onOpenCurrent = useCallback(() => {
        setOpenFrom(false);
    }, []);

    // initialize loading indicator
    const [loading, setLoading] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
            <SafeAreaView style={styles.container}>
                <SeedPath style={{position: 'absolute', top: 0, right: -10}}/>
                <Text style={[styles.title]}>Ready to {'\n'}connect?</Text>
                <Text style={styles.label}>What country are you from?</Text>
                    <DropDownPicker
                        open={openFrom}
                        onOpen={onOpenFrom}
                        value={valueFrom}
                        items={itemsFrom}
                        setOpen={setOpenFrom}
                        setValue={setValueFrom}
                        setItems={setItemsFrom}
                        loading={loading}
                        autoScroll={true}
                        translation={{
                            PLACEHOLDER: 'Select a country'
                        }}
                        style={{
                            width: 320,
                            backgroundColor: '#FFF3BE',
                            borderColor: '#FFF3BE',                    
                            borderRadius: 16,
                            height: 56,
                            alignSelf: 'center',
                        }}
                        textStyle={{
                            fontSize: 16,
                            fontFamily: 'Segoe-UI',
                            color: "#4F4F4F",
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: '#FFF3BE',
                            borderColor: '#FFF3BE',
                            borderRadius: 16,
                            width: 320,
                            alignSelf: 'center',
                            marginTop: 15,
                        }}
                        scrollViewProps={{
                            decelerationRate: "fast"
                        }}
                        activityIndicatorColor="#ECB115"
                    />
                <Text style={styles.label}>What country do you live in now?</Text>
                    <DropDownPicker
                        open={openCurrent}
                        onOpen={onOpenCurrent}
                        value={valueCurrent}
                        items={itemsCurrent}
                        setOpen={setOpenCurrent}
                        setValue={setValueCurrent}
                        setItems={setItemsCurrent}
                        loading={loading}
                        autoScroll={true}
                        translation={{
                            PLACEHOLDER: 'Select a country'
                        }}
                        zIndex={3000}
                        zIndexInverse={1000}
                        style={{
                            width: 320,
                            backgroundColor: '#FFF3BE',
                            borderColor: '#FFF3BE',
                            borderRadius: 16,
                            height: 56,
                            alignSelf: 'center',
                            marginBottom: 160,
                        }}
                        textStyle={{
                            fontSize: 16,
                            fontFamily: "Segoe-UI",
                            color: "#4F4F4F",
                        }}
                        dropDownContainerStyle={{
                            backgroundColor: '#FFF3BE',
                            borderColor: '#FFF3BE',
                            width: 320,
                            borderRadius: 16,
                            alignSelf: 'center',
                            marginTop: 15,
                        }}
                        scrollViewProps={{
                            decelerationRate: "fast"
                        }}
                        activityIndicatorColor="#ECB115"
                    />
                <Button title='Next' position={{marginBottom: 16, alignSelf: 'center'}} onPress={() => navigation.navigate('InitializeProfile')}/>
                <Text style={styles.smallText}>Already have an account? <Text style={{color: '#FFBC05'}} onPress={() => navigation.navigate('SignIn')}>Sign in here.</Text></Text>
                <StatusBar style="auto" />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        marginHorizontal: 40,
        marginVertical: 10,
    },
    smallText: {
        fontFamily: 'Segoe-UI',
        fontSize: 16,
    }
});