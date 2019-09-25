import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
    const name = <Text style={styles.subHeadingStyle}>My name is ABCD</Text>;

    return <View>
            <Text style={styles.textStyle}>Getting Started with React Native</Text>
            {name}
        </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeadingStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;
