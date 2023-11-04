import React from 'react';
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';

export default Paginator = ( { data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: 'row', height: 64, alignItems: 'flex-start' }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.5, 1, 0.5],
                    extrapolate: 'clamp',
                })

                return (
                    <Animated.View 
                        style={[
                            styles.dot, 
                            {
                                width: dotWidth,
                                opacity,
                            },
                        ]}
                        key={i.toString()} 
                    />);
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#F9CD54',
        marginHorizontal: 8,
    }
});