import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView,Platform, StatusBar,Image,StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register,googleSignup} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#1A73E8"
      />

      <View style={{flexDirection:"column",alignItems:"center"}}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    
      
      <Text style={styles.text}>TOP RATHI</Text>
      <Text style={{color:"#fff",marginTop:4}}>
              Register to continue
            </Text>
      </View>
        <View>

          <TouchableOpacity onPress={() => googleSignup
            ()} style={styles.signInButton}>
              <Image
                source={require('../assets/google.png')}
                style={styles.googlelogo}
              />
              <Text style={styles.googletext}>
                 Sign up with google
            </Text>
          </TouchableOpacity>

          
          
          
          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.middleText}>
              Already have an acount? Login Here
            </Text>
          </TouchableOpacity>

        </View>
   

      

          <Text style={styles.Bottomtext}>
                  No fake news no alternative facts, 
            Just a daily dose of verified information for 
            you, every morning
          </Text>
      
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#1A73E8',
  },
  signInButton:{
    padding:12,
    flexDirection:'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderRadius:5,
    elevation:6
  },  
  logo: {
  
    
    height: 150,
    width: 150,
    resizeMode: 'cover',
    alignItems:'center',
    
  },
  googlelogo:{
    width:30,
    marginRight:10,
    height:30
  },  
  googletext:{
      fontSize:16,
      color:"#000",
      fontWeight:'bold'
  },  
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    color: '#fff',
    textAlign:'center',
    fontFamily:'Poppins-Medium',
  },
  middleText: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 18,
    color: '#fff',
    textAlign:'center',
    marginTop:10,
  },
  Bottomtext: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 20,
    color: '#f8f8f8',
    textAlign:'center',
    fontWeight:'100',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    textAlign:'center'
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Lato-Regular',
  },
});
