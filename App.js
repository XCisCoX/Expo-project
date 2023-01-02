import {React,useState} from "react";
import {View,Text,StyleSheet,Image, ScrollView,Button} from "react-native" ;
import Font from 'expo-font';
import HeaderApp from "./Components/Header";
import FooterApp from "./Components/Footer";
import ContentApp from "./Components/Content";
//import { faker } from '@faker-js/faker/locale/fa';
import { faker } from '@faker-js/faker';



export default function App() {
  //use state is a code for re render app so you don't need to render again to see resault

  const [Captions,getCaptions]=useState("Anyting");
  var arrayItems=[];


(function(){
  for (var i = 0; i < 10; i++) {
  
    const uname=faker.name.fullName();
    arrayItems.push(
      <ContentApp profileName={uname} comments={[uname," : ",Captions]}
      imageProfile={faker.image.avatar()}
     imageMain={faker.image.imageUrl(640,480,'Music',true)}/>
      
      )
  }
  

})()


  return (
   
    <View style={styles.MainBackground}>   
      
        <HeaderApp s="MamadGram"/>
        <ScrollView style={[{flex:1}]}>
        {arrayItems}

        
        </ScrollView>
        <FooterApp title="Join"/>
       
    </View>
    
  );
}

const styles=StyleSheet.create({
  MainBackground:{   
    flex:1,
    justifyContent:"flex-start",//chapo rast control mikone
    backgroundColor:"#00a0af",     
   // alignItems:"center" //chapo rast control mikone
  },

  MainTexts :{
    textAlign:"center",
    margin:0,flex:0, 
    fontSize:20
  },

 

 });
