import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import {AuthContext} from '../navigation/AuthProvider';
import {ProfileView ,
  Header,ProfileImg,
  UserName,Mobile,Data,Row,Column,ListText,
  LogoutButton,LogoutText
} from '../styles/ProfileStyles';
import {Container,
 Button} from "../styles/HomeStyles";
 import Ionicons from 'react-native-vector-icons/Ionicons';

 import AntDesign from 'react-native-vector-icons/AntDesign';
 
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfileScreen({navigation}) {
  return (
    <Container>
      <ScrollView>

      
        <Header>
          <Button onPress={()=>navigation.goBack()}>
              <Ionicons name="arrow-back" color="#000" size={28} />
          </Button> 
          <Button>
              <Ionicons name="information-circle-outline" color="#000" size={28} />
          </Button> 
        </Header>



        <ProfileView>
              
              <Row>
                <Data>
                  
                  <Column>
                  <ProfileImg 
                      source={{uri: "https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg"}}
                      
                  />
                    <UserName>Shivam Namdeo</UserName>
                    <Mobile>7828303784</Mobile>
                  </Column>
                 
                </Data>
                <AntDesign name="right" color="#ccc" size={22} />
              </Row>

              

              <Row>
                <Data>
                  <Ionicons name="ios-person-outline" color="#3755db" size={30} />
                  <Column>
                    <ListText>Personal Info</ListText>
                  </Column>
                 
                </Data>
                <AntDesign name="right" color="#ccc" size={22} />
              </Row>
              <Row>
                <Data>
                  <MaterialCommunityIcons name="book-education-outline" color="#f2440a" size={30} />
                  <Column>
                    <ListText>Education </ListText>
                  </Column>
                 
                </Data>
                <AntDesign name="right" color="#ccc" size={22} />
              </Row>
              <Row>
                <Data>
                  <AntDesign name="notification" color="#1fcc56" size={30} />
                  <Column>
                    <ListText>Notifications</ListText>
                  </Column>
                 
                </Data>
                <AntDesign name="right" color="#ccc" size={22} />
              </Row>
              <Row>
                <Data>
                  <Ionicons name="ios-bookmarks-outline" color="#0a9bbf" size={30} />
                  <Column>
                    <ListText>Bookmarks</ListText>
                  </Column>
                 
                </Data>
                <AntDesign name="right" color="#ccc" size={22} />
              </Row>


        </ProfileView>
        </ScrollView>


        <LogoutButton>
            <LogoutText>Logout</LogoutText>
        </LogoutButton>
    </Container>
  )
}