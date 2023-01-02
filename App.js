import React from "react";
import {View,Text,StyleSheet,Image} from "react-native" ;
import Font from 'expo-font';
import HeaderApp from "./Components/Header";
import FooterApp from "./Components/Footer";

export default function App() {
  return (
    <View style={styles.MainBackground}>   
       
        <HeaderApp s="Title"/>

         <View style={styles.ContentBackground}>

            <View style={styles.Contenttop}>
              
            <View style={styles.ContentTopPic}>
            <Image style={[{width:40,height:40,borderRadius:50}]}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
               </View>
               <View style={styles.ContentTopText}>
                  <Text style={styles.MainText}>Profile</Text>
               </View>
            </View>
            


            <View style={styles.Contentmid}>

              <View style={styles.ContentMidRight}>
              <Text style={[styles.MainText,{color:"#fff"}]}></Text>
              </View>

              <View style={styles.ContentMidLeft}>
              <Text style={[styles.MainText,{color:"#111"}]}>  </Text>
              </View>

            </View>
            <View style={styles.Contentbot}> 
              <Text style={styles.MainText}>Comment</Text>
            </View>
         </View>

        <FooterApp title="Nice Say it"/>


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

  MainText :{
    textAlign:"center",
    fontSize:24
  },

 ContentBackground: {
  backgroundColor:"#888888",
  justifyContent:"center",
  padding:20,
  alignItems:"stretch",
  flex:0.7
        }, 
        Contenttop: {
          backgroundColor:"#fff",
          justifyContent:"center",
          alignItems:"center",
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          flexDirection:"row",
          flex:0.2
        },
        ContentTopPic:{
          alignItems:"flex-start",
          padding:10,
          flex:0.2
        },
        ContentTopText:{
          alignItems:"flex-start",
          flex:0.8
        },
        Contentmid: {
          backgroundColor:"#40a8a9",
          justifyContent:"center",
          alignItems:"stretch",   
          flexDirection:"row",
          flex:0.8
        },
        ContentMidRight:{
          flex:0.1,    
          backgroundColor:"#002044",
          justifyContent:"center",
        },
        ContentMidLeft:{
          flex:0.9,
          backgroundColor:"#00ff80",        
          justifyContent:"center",
        },
        Contentbot: {
          backgroundColor:"#fff",
          justifyContent:"center",
          alignItems:"center",
          borderBottomRightRadius:20,
          borderBottomLeftRadius:20,
          flex:0.2
        },

 });
