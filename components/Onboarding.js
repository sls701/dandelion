import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import Button from '../components/Button';

const slides = 
[
    {
        id: '1',
        title: 'Welcome to Dandelion!',
        description: 'You\'re one step closer to joining a community where you truly belong.',
        image: require('../assets/images/onboarding-logo.png'),
    },
    {
        id: '2',
        title: 'Join a Welcoming\nCommunity',
        description: 'Connect with immigrants who share the same heritage as you.',
        image: require('../assets/images/onboarding-logo.png'),
    },
    {
        id: '3',
        title: 'Share Your Experiences',
        description: 'Keep it personal with direct messages or reach out to local community members.',
        image: require('../assets/images/onboarding-logo.png'),
    },
];

export default Onboarding = ({navigation}) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList 
                    data={slides}
                    renderItem={({item}) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX}/>
            <Button title='Get Started' position={{marginBottom: 40}} onPress={() => navigation.navigate('ChooseCountries')}/>
            <StatusBar style="auto" />
        </SafeAreaView > 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});