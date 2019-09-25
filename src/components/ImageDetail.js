import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource} />
            <Text style={styles.textStyles}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 24
    }
});

export default ImageDetail;