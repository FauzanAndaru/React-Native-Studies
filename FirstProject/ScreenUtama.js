import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './Screen1'
import {AboutScreen} from './Screen2'
import {ListScreen} from './Screen3'
import {DetailScreen} from './Screen4'

const Stack = createNativeStackNavigator();
const ScreenUtama = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Facebook" screenOptions={{headerShown:true}}>
        <Stack.Screen name="Home"component={HomeScreen}options={{ title: 'My Home',}}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Our Profile' }}/>
        <Stack.Screen name="Friend list" component={ListScreen} options={{ title:'Friend List' }}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title:'Friend Detail' }}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}
        export default ScreenUtama;
        