import { View, Text,StatusBar,ScrollView ,ImageBackground,StyleSheet} from 'react-native'
import React from 'react'
import {Container,Header,HeadText,ProfileIcon,Ctitle,ProfileText,Timestamp,Tag,Row,Button,Grid,GridComp,HelloWrap,ProfileName,FilterScroll,FilterText} from "../styles/HomeStyles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

export default function HomeScreen() {

  const data_list=[
    {
      key:"1",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/1.png"),
    },
    {
      key:"2",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/2.png"),    
    },
    {
      key:"3",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/grid.png"),   
    },
    {
      key:"4",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/6.png"),   
    
    },
    {
      key:"5",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/5.png"),   
    },
    {
      key:"6",
      title:"A wrapper for making views respond properly to touches. ",
      text:"A wrapper for making views respond properly to touches. ",
      timestamp:1606161611,
      img:require("../assets/5.png"),   
    },

  ]

  return (
    <Container>
       <ScrollView>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="#fff"
      />

      <Header>
          <Button>
              <MaterialIcons name="menu-open" color="#000" size={28} />
          </Button>
         <HeadText>FEED</HeadText>
        <Row>
            <Button>
              <MaterialIcons name="search" color="#000" size={25} />
            </Button>
            
           
              <ProfileIcon
                source={require('../assets/google.png')}
              
              />
            
            
        </Row>
        
      </Header>

      <HelloWrap>
          <ProfileName>
            Hello, Claudia Alves!
          </ProfileName>
          <ProfileText>
             What do you want to hear today?
          </ProfileText>
      </HelloWrap>
      

      <Row>
        <FilterScroll
          contentContainerStyle={{alignItems:"center"}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Text style={{backgroundColor:"#1A73E8",padding:8,borderRadius:33,color:"#fff",marginRight:10}}>asdasdasd</Text>
          <Text style={{backgroundColor:"#ccc",padding:8,borderRadius:33,color:"#fff",marginRight:10}}>asdasdasd</Text>
          <Text style={{backgroundColor:"#ccc",padding:8,borderRadius:33,color:"#fff",marginRight:10}}>asdasdasd</Text>
          <Text style={{backgroundColor:"#ccc",padding:8,borderRadius:33,color:"#fff",marginRight:10}}>asdasdasd</Text>
          <Text style={{backgroundColor:"#ccc",padding:8,borderRadius:33,color:"#fff",marginRight:10}}>asdasdasd</Text>
       
        </FilterScroll>
      </Row>

        
     
        <Grid>
        
             {
                		data_list.map((item,index=0) => (
                      <GridComp key={index+1}>
                          <View style={styles.imageWrapper}>
                              <ImageBackground blurRadius={8} style={styles.theImage} source={item.img}>
                                    <Ctitle>{item.title}</Ctitle>
                                    
                                    <Tag>React Native</Tag>
                                    <Timestamp>{moment(item.timestamp).fromNow()}</Timestamp>
                                   
                                   
                              </ImageBackground>
                          </View>
                      </GridComp>
                		))
          		}
            
           
        </Grid>
        </ScrollView>
        



    </Container>
  )
}

const styles = StyleSheet.create({
  imageWrapper: {
      height: 220,
      width: 160,
      overflow : "hidden",
      borderRadius:8,
      backgroundColor:'rgba(255,25,0,0.5)',

  },
  theImage: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
      justifyContent:"flex-end",
      opacity: 0.9
      
  }
})