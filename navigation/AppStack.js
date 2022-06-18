import React,{useState,useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CollectDataScreen from '../screens/CollectDataScreen';
import { NavigationContainer } from '@react-navigation/native';
import CollegeCollect from "../screens/CollegeCollect";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = ({navigation}) => {

  const [isMetaDataDone, setisMetaDataDone] = useState(false);
  let routeName;
  
  useEffect(() => {
    AsyncStorage.getItem('isMetaData').then((value) => {
      console.log(value);
      if(value === 'true'){
        
        console.log("value null hai to home pr jana h ")
      } else {
        setisMetaDataDone(false);
      }
    }); 
    
  },[]);



  if (isMetaDataDone === true) {
    routeName = 'Home';
  } else {
    routeName = 'CollectData';
  }


  return(

    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="CollectData"
        component={CollectDataScreen}
        options={{header: () => null}}
      />
       <Stack.Screen
        name="CollegeCollect"
        component={CollegeCollect}
        options={{header: () => null}}
      />



     
      
    </Stack.Navigator>
  );
  

}



export default AppStack;
