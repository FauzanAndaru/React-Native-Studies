import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Image, Button, Flatlist, StyleSheet, Scrollview, TouchableOpacity } from 'react-native';
import * as React from 'react';
import {Component} from 'react'
import ScrollView from "react-native/Libraries/Components/ScrollView/ScrollView";

const Stack = createNativeStackNavigator();

const mainMenu = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Instagram'>
        <Stack.Screen name='Instagram' component={ForYou} options={{headerShown:true, title:'Instagram'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default mainMenu;

const ForYou = ({navigation}) => {
  return(
      <View style={{flex:1}}>

        <View style={{flex:1, backgroundColor:'#'}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbfemale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbfemale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbfemale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbfemale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbfemale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
                <Image style={{width:100, height:100, borderRadius: 150 / 2, overflow: "hidden", borderWidth: 3,}} source={require('./images/fbmale.png')}></Image>
              </ScrollView>
          </View>
		</ScrollView>
    </View>
</View>
);}