import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './Screen1'
import {AboutScreen} from './Screen2'
import {ListScreen} from './Screen3'
import {DetailScreen} from './Screen4'
const Stack = createNativeStackNavigator();
const AppHome = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
            <Stack.Screen name="Home"component={HomeScreen}options={{ title: 'Kelompok 4',headerTitleAlign:'center'}}/>
            <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }}/>
            <Stack.Screen name="Profile" component={ListScreen} options={{ title:'Profile' }}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title:'Detail' }}/>
            </Stack.Navigator>
        </NavigationContainer>
        );
        }
        export default AppHome;