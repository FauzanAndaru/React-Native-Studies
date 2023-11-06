import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

export const DetailScreen = ({ route, navigation }) => {
    const { itemId } = route.params;
    const Name = [
        {"id":1103180205, "value":'Fauzan Andaru Kurniadi', "img":require('./images/fbmale.png')}, 
        {"id":1103180056, "value":'Fidra Irfan Fikri', "img":require('./images/fbmale.png')}, 
        {"id":1103184018, "value":'Muhammad Emir Ghifari', "img":require('./images/fbmale.png')}, 
        {"id":1103184064, "value":'Muhammad Arham Irsyad', "img":require('./images/fbmale.png')}, 
    ];
    
    const selectedName = Name[itemId];
    
    return (
    <View style={{ flex: 1 }}>
        <Text>Detail Screen</Text>
        <Text>Nama: {selectedName.value}</Text>
        <Text>Nim: {selectedName.id}</Text>
        <Image source={selectedName.img} style={{width: 400, height: 490, resizeMode:'contain'}} />
        <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
    );
}
