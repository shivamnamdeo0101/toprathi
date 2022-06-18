import { View, Text,KeyboardAvoidingView,StyleSheet,ScrollView,TouchableOpacity,Pressable,TextInput} from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../navigation/AuthProvider';
import {CollectModal,
  BoxChip,BoxText,ClassChip,ClassText
} from "../styles/CollectDataStyles";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Chip } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function EditProfileDataScreen({navigation}) {
  
  const {user, logout} = useContext(AuthContext);
  const [name, set_name] = useState(user.name);
  const [email, set_email] = useState(user.email);
  const [belong, set_belong] = useState("College")

  const [state_list, set_state_list] = useState(['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu', 'Jharkhand', 'Karnataka', 'Kashmir', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal']);
  const [state, set_state] = useState("Select");

  const [state_modal, set_state_modal] = useState(false);


  const [class_modal, set_class_modal] = useState(false);
  const [class_in, set_class_in] = useState("");

  const toggle_state_modal= () => {
    set_state_modal(!state_modal);
  };

  const toggle_class_modal= () => {
    set_class_modal(!class_modal);
  };

  useEffect(() => {
    AsyncStorage.getItem('isMetaData').then((value) => {
      console.log(value);
      if (value == 'true') {
        navigation.navigate("Home");
      } 
    }); 
    
  },[]);

  const StateSelect = (item)=>{
    set_state(item);
    toggle_state_modal();
  }

  const ClassSelect = (item)=>{
      set_class_in(item);
      toggle_class_modal();
  }

  const set_false = ()=>{
    AsyncStorage.setItem(
      'isMetaData',
      'false'
    )

    alert("Done");
  }

  const StateListComp = state_list.map((item,index=0) => {
    return (

      <Pressable onPress={()=>StateSelect(item)}style={{borderRadius:8,flexDirection:"row",backgroundColor:"#eee",marginBottom:8,padding:10,alignItems:"center"}}key={index}>
        <MaterialCommunityIcons name={state != item ? "checkbox-blank-circle-outline" : "check-circle"} color="#2e81f5" size={25} />

        <Text style={{color:"#000",fontSize:16,fontWeight:"500"}}>
          {item}
        </Text>
      </Pressable>

    )
  })
  const ClassListComp = ["1","2","3","4","5","6","7","8","9","10","11","12"].map((item,index=0) => {
    return (
      <Pressable onPress={()=>ClassSelect(item)}style={{borderRadius:8,flexDirection:"row",backgroundColor:"#eee",marginBottom:8,padding:10,alignItems:"center"}}key={index}>
        <MaterialCommunityIcons name={class_in != item ? "checkbox-blank-circle-outline" : "check-circle"} color="#2e81f5" size={25} />

        <Text style={{color:"#000",fontSize:16,fontWeight:"500"}}>
          {item} Class
        </Text>
      </Pressable>
    )
  })
  
  
  return (
   
    
    <View style={{flex:1,backgroundColor:"#f8f8f8",padding:16}}>

  

    <Modal
        isVisible={state_modal}
        onSwipeComplete={() => toggle_state_modal()}
        swipeDirection="down"
        deviceWidth={1}
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}></View>
              <View>
              </View>
                 <View style={{padding:10,marginTop:30}}>
                 <ScrollView>
                 {StateListComp}
                 </ScrollView>
                 </View>
              </View>
        </View>
      </Modal>

      <Modal
        isVisible={class_modal}
        onSwipeComplete={() => toggle_class_modal()}
        swipeDirection="down"
        deviceWidth={1}
        
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalText}></View>

              <View>
            
              </View>
              
                 <View style={{padding:10,marginTop:30}}>
                 <ScrollView>
                 {ClassListComp}
                 </ScrollView>
                 </View>
             </View>
        </View>
      </Modal>

      <View>

          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Full Name</Text>
            <TextInput
              style={{borderRadius:8,fontSize:16,padding:10,color:"#111",borderColor:"#ccc",borderWidth:2}}
              onChangeText={(e)=>set_name(e)}
              placeholder="Your Full Name"
              placeholderTextColor="#ccc"
              value={name}
            />
          </View>

          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Your Email</Text>
            <TextInput
              style={{borderRadius:8,fontSize:16,padding:10,color:"#111",borderColor:"#ccc",borderWidth:2}}
              onChangeText={(e)=>set_email(e)}
              placeholder="Your Email"
              placeholderTextColor="#ccc"
              value={email}
            />
            


          </View>
          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>State Of Residance</Text>
        
            <TouchableOpacity onPress={()=>toggle_state_modal()} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:2,borderColor:"#ccc",padding:10,borderRadius:8}}>
              <Text style={{color:"#383157",fontSize:16,fontWeight:"bold"}}>{state}</Text>
              <MaterialCommunityIcons name="menu-down" color="#000" size={28} />
      
            </TouchableOpacity>
          </View>
          <View style={{padding:10}}>

          <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Currently Pursuing </Text>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              <Text onPress={()=>navigation.navigate("CollegeCollect")} style={belong != "College" ? styles.belong_ : styles.belong_selected}>College</Text>
              <Text onPress={()=>{set_belong("School"),toggle_class_modal()}} style={belong != "School" ? styles.belong_ : styles.belong_selected}>School</Text>
            </View>
           
          </View>


      </View>

      <Text style={{color:"#383157",fontSize:14,fontWeight:"500",textAlign:"center",margin:10}}>By registering you agree to our 
      <Text style={{color:"#2e81f5",fontSize:14,fontWeight:"500"}} > Terms of Services </Text>
      <Text style={{color:"#383157",fontSize:14,fontWeight:"500"}}> and </Text>
      <Text style={{color:"#2e81f5",fontSize:14,fontWeight:"500"}}> Privacy Policy</Text></Text>

      <TouchableOpacity onPress={()=>alert("HI")} style={{borderRadius:8,padding:16,backgroundColor:"#2e81f5",margin:10,marginBottom:5,elevation:4}}>
        <Text style={{textAlign:"center",fontSize:16,color:"#fff",fontWeight:"bold"}}>Register To Continue</Text>
      </TouchableOpacity>

      
    

    </View>
  
  )
}





const styles = StyleSheet.create({
  centeredView: {
    flex:1,
    
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  belong_selected:{
    elevation:4,
    backgroundColor:"#2e81f5",color:"#fff",
    fontSize:16,fontWeight:"bold",padding:16,
    width:"50%",textAlign:"center"
  },  

  belong_:{
    elevation:4,
    backgroundColor:"#fff",color:"#000",fontSize:16,
    fontWeight:"bold",padding:16,width:"50%",textAlign:"center"
  },
  modalView: {

    height:"70%",
    width:"100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius:22,
    borderTopRightRadius:22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    backgroundColor:"#ccc",
    width:60,
    height:3,
    marginTop:5,
    borderRadius:10,
    alignSelf:"center",
    color:"#ccc"
  }
});