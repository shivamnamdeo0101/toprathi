import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import EditProfileDataScreen from './EditProfileDataScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CollectDataScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:"#f8f8f8",}}>
         <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:20}}>
          <Ionicons name="chevron-back" color="#000" size={25} />
          <Text style={{color:"#383157",fontSize:18,}}>REGISTER</Text>
          <Text style={{color:"#2e81f5",fontSize:18,}}>Sign In</Text>
        </View>

      <EditProfileDataScreen navigation={navigation}/>

    </View>
  )
}