import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Facebook</Text>
        <Button title="Go to About"onPress={() => navigation.navigate('About')}/>
        <Button title="Go to Profile"onPress={() => navigation.navigate('Profile')}/>
    </View>
    );
}