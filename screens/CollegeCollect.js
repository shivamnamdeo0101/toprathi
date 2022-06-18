import { View, Text,KeyboardAvoidingView,StatusBar,StyleSheet,ScrollView,TouchableOpacity,Pressable,TextInput} from 'react-native'
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


export default function CollegeCollect({navigation}) {

     
  const {user, logout} = useContext(AuthContext);
  const [college_name, set_college_name] = useState("");
  const [email, set_email] = useState(user.email);
  

  const [branch_list, set_branch_list] = useState(['Information Texhnology',"Computer Science","Civil","Mechanical"]);
  const [branch_modal, set_branch_modal] = useState(false);
  const [branch, set_branch] = useState("IT");

  const [grad_list, set_grad_list] = useState(["Diploma","Graduation","Post Graduate"]);
  const [grad_modal, set_grad_modal] = useState(false);
  const [grad, set_grad] = useState("IT");


  const [sem, set_sem] = useState("1");
  const [sem_modal, set_sem_modal] = useState(false);
 
  const toggle_branch_modal= () => {
    set_branch_modal(!branch_modal);
  };

  const toggle_sem_modal= () => {
    set_sem_modal(!sem_modal);
  };

  const toggle_grad_modal= () => {
    set_grad_modal(!grad_modal);
  };
 

  const BranchSelect = (item)=>{
    set_branch(item);
    toggle_branch_modal();
  }

  const SemSelect = (item)=>{
      set_sem(item);
      toggle_sem_modal();
  }



  const BranchListComp = branch_list.map((item,index=0) => {
    return (

      <Pressable onPress={()=>BranchSelect(item)}style={{borderRadius:8,flexDirection:"row",backgroundColor:"#eee",marginBottom:8,padding:10,alignItems:"center"}}key={index}>
        <MaterialCommunityIcons name={branch != item ? "checkbox-blank-circle-outline" : "check-circle"} color="#2e81f5" size={25} />

        <Text style={{color:"#000",fontSize:16,fontWeight:"500"}}>
          {item}
        </Text>
      </Pressable>

    )
  })
  const SemListComp = ["1","2","3","4","5","6","7","8","9","10","11","12"].map((item,index=0) => {
    return (
      <Pressable onPress={()=>SemSelect(item)}style={{borderRadius:8,flexDirection:"row",backgroundColor:"#eee",marginBottom:8,padding:10,alignItems:"center"}}key={index}>
        <MaterialCommunityIcons name={sem != item ? "checkbox-blank-circle-outline" : "check-circle"} color="#2e81f5" size={25} />

        <Text style={{color:"#000",fontSize:16,fontWeight:"500"}}>
          {item} Sem
        </Text>
      </Pressable>
    )
  })
  const GradListComp = grad_list.map((item,index=0) => {
    return (
      <Pressable onPress={()=>SemSelect(item)}style={{borderRadius:8,flexDirection:"row",backgroundColor:"#eee",marginBottom:8,padding:10,alignItems:"center"}}key={index}>
        <MaterialCommunityIcons name={sem != item ? "checkbox-blank-circle-outline" : "check-circle"} color="#2e81f5" size={25} />

        <Text style={{color:"#000",fontSize:16,fontWeight:"500"}}>
          {item} Sem
        </Text>
      </Pressable>
    )
  })
  
  
  return (
    <View style={{flex:1,backgroundColor:"#f8f8f8",padding:16}}>
           <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />
           
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Ionicons name="chevron-back" color="#000" size={25} onPress={()=>navigation.goBack()}/>
          <Text style={{padding:12,fontSize:18,color:"#2e81f5"}}>Add Your College Details</Text>

        </View>
   
    <Modal
        isVisible={branch_modal}
        onSwipeComplete={() => toggle_branch_modal()}
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
                 {BranchListComp}
                 </ScrollView>
                 </View>
              </View>
        </View>
      </Modal>

      <Modal
        isVisible={sem_modal}
        onSwipeComplete={() => toggle_sem_modal()}
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
                 {SemListComp}
                 </ScrollView>
                 </View>
             </View>
        </View>
      </Modal>
      <Modal
        isVisible={grad_modal}
        onSwipeComplete={() => toggle_grad_modal()}
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
                 {GradListComp}
                 </ScrollView>
                 </View>
             </View>
        </View>
      </Modal>

      <View>

          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>College Name</Text>
            <TextInput
              style={{borderRadius:8,fontSize:16,padding:10,color:"#111",borderColor:"#ccc",borderWidth:2}}
              onChangeText={(e)=>set_college_name(e)}
              placeholder="Your College Name"
              placeholderTextColor="#ccc"
              value={college_name}
            />
          </View>

          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Graduation Type</Text>
        
            <TouchableOpacity onPress={()=>toggle_grad_modal()} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:2,borderColor:"#ccc",padding:10,borderRadius:8}}>
              <Text style={{color:"#383157",fontSize:16,fontWeight:"bold"}}>{grad}</Text>
              <MaterialCommunityIcons name="menu-down" color="#000" size={28} />
      
            </TouchableOpacity>
          </View>

         
          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Branch Name</Text>
        
            <TouchableOpacity onPress={()=>toggle_branch_modal()} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:2,borderColor:"#ccc",padding:10,borderRadius:8}}>
              <Text style={{color:"#383157",fontSize:16,fontWeight:"bold"}}>{branch}</Text>
              <MaterialCommunityIcons name="menu-down" color="#000" size={28} />
      
            </TouchableOpacity>
          </View>

          <View style={{padding:10}}>
            <Text style={{color:"#383157",fontSize:16,marginBottom:6,fontWeight:"bold"}}>Branch Name</Text>
        
            <TouchableOpacity onPress={()=>toggle_sem_modal()} style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderWidth:2,borderColor:"#ccc",padding:10,borderRadius:8}}>
              <Text style={{color:"#383157",fontSize:16,fontWeight:"bold"}}>{sem}</Text>
              <MaterialCommunityIcons name="menu-down" color="#000" size={28} />
      
            </TouchableOpacity>
          </View>

         
          <Text style={{color:"#383157",fontSize:14,fontWeight:"500",textAlign:"center",margin:10}}>By registering you agree to our 
      <Text style={{color:"#2e81f5",fontSize:14,fontWeight:"500"}} > Terms of Services </Text>
      <Text style={{color:"#383157",fontSize:14,fontWeight:"500"}}> and </Text>
      <Text style={{color:"#2e81f5",fontSize:14,fontWeight:"500"}}> Privacy Policy</Text></Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{borderRadius:8,padding:16,backgroundColor:"#2e81f5",margin:10,marginBottom:5,elevation:4}}>
        <Text style={{textAlign:"center",fontSize:16,color:"#fff",fontWeight:"bold"}}>Register To Continue</Text>
      </TouchableOpacity>


      </View>

      
    

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