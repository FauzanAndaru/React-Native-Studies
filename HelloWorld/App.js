import React from 'react'; 
import { Text, View, Image } from 'react-native'; 
import styles from './styles/AppStyle' 
 
const HelloWorldApp = () => { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.text_big}>Fauzan Andaru Kurniadi</Text> 
      <Text style={styles.text_big}>1103180205</Text>
      <Image
      source={require('./images/Reunion.jpg')}
      style={{width: 300 ,height: 300 , resizemode: 'contain'}}
      />
    </View> 
  ) 
} 
 
export default HelloWorldApp; 