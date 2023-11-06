import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ListScreen = ({ navigation }) => {
    const Name = [
        {"id":0, "value":'Anggota 1'}, 
        {"id":1, "value":'Anggota 2'}, 
        {"id":2, "value":'Anggota 3'}, 
        {"id":3, "value":'Anggota 4'}, 
    ];

    return (
    <View style={{ flex: 1}}>
        <Text>Anggota Kelompok</Text>
        { Name.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('DetailScreen', {itemId:item.id})}>
        <View key={item.id} style={styles.button}>
            <Text style={styles.buttonText} key={item.id}>{item.value}</Text>
        </View>
    </TouchableOpacity>
    ))}
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
        },
    button: {
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: '#2196F3'
        },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
        fontSize: 20
        }
    });