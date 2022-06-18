import { View, Text ,StyleSheet,ImageBackground,StatusBar} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function OnboardingScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar
        animated={true}
        backgroundColor="#1A73E8"
      />
      <ImageBackground source={require("../assets/onboard.png")} resizeMode="cover" style={styles.image}>

          <View style={{backgroundColor:"#4003",borderTopLeftRadius:16,borderTopRightRadius:16}}>

      
                  <View style={{padding:16}}>
                    <Text style={{fontFamily:"Poppins-Regular",fontSize:35,color:"#fff",fontWeight:"bold"}}>Find Your Right Career Path On Top Rathi</Text>
                    <Text style={{fontFamily:"Poppins-Regular",fontSize:15,color:"#fff",fontWeight:"400"}}>India's largest career guidance platform</Text>


                  </View>
                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",}}>Get Started</Text>
                </TouchableOpacity>
          </View>
      </ImageBackground>
  </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
        
    },
    image: {
      flex: 1,
      justifyContent: "flex-end",
      
    },

    button:{
      padding:18,
      textAlign:"center",
      backgroundColor:"#12a66d",
      margin:16,
      borderRadius:8,
      elevation:2,
    },  

    f_line:{
        color: "white",
      fontSize:28,
      padding:16,
      textAlign: "left",

      backgroundColor: "#8003",
      fontFamily:"Lato-Bold"
    },
    text: {
      color: "white",
      fontSize:28,
      
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000"
    }
  });
  
  