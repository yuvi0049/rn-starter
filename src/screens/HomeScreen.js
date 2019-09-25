import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi All!!!</Text>

      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go To Component Page"
      />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List Page"
      />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Image Page"
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Page"
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Color Page"
      />

      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square Page"
      />

      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go To Text Page"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});

export default HomeScreen;
