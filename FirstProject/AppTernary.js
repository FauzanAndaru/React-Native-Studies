import React, { Component } from 'react';
 
import { StyleSheet, View, Button, TextInput, Text, Alert} from 'react-native';
 

 
const styles = StyleSheet.create({
 
  MainContainer :{
      
      flex:1,
      padding: 10,
      alignItems: 'center',
      flexDirection:'column',
      justifyContent: 'center'
  
  },
 
  TextInputStyle:
    {
      borderWidth: 1,
      borderColor: 'white',
      height: 40,
      marginBottom: 10,
      textAlign: 'center',
      alignItems: 'center'
    }
 
});

class AppTernary extends Component {
 
  constructor()
    {
        super();
 
        this.state = 
          { 
 
            InputNilai: ''
 
          }
    }
 
  nilai=()=>{
 
  ( this.state.InputNilai < 50 ) ?  Alert.alert("lulus.") : Alert.alert("tidak Lulus.")
 
  }
 
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
        <Text>Nilai</Text>
          <TextInput 
            underlineColorAndroid = "transparent" 
            placeholder="Masukan nilai anda"
            style = { styles.TextInputStyle } 
            onChangeText = { ( text ) => { this.setState({ InputNilai: text })} } 
            />
          <View style={{marginBottom : 10}}>
            <Button title='Simpan' onPress={this.nilai} />
          </View>
      </View>
 
           
   );
 }
}export default AppTernary;