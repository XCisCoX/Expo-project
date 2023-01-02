import {React,useState} from "react";
import {View,Text,StyleSheet,Image,ScrollView,TextInput,Button} from "react-native" ;

export default function ContentApp(probs){
  var isFullSize=false;
    return (
        <View style={styles.ContentBackground}>
        <View style={styles.Contenttop}>
        <View style={styles.ContentTopPic}>
        <Image  style={[{width:40,height:40,borderRadius:50,borderColor:"white",borderWidth:2}]}
    source={{
      uri:probs.imageProfile
     }} />
           </View>
           <View style={styles.ContentTopText}>
              <Text style={styles.MainText}>{probs.profileName}</Text>
           </View>
        </View>
        
        <View style={styles.Contentmid} onTouchStart={()=>{
      
        }}>

          <Image style={{width:300,height:250}} 
    source={{
      uri:probs.imageMain
     }}   resizeMode='contain' onTouchStart={()=>{

   

     }}/>
         
        </View>


        <View style={styles.Contentbot}> 
        <ScrollView >
          <Text style={[styles.MainText,{fontSize:14}]}>{probs.comments}</Text>
        </ScrollView>
        <TextInput style={styles.ContentbotComment} placeholder="Instert Your Comments" placeholderTextColor="#aaa"/>  
        {/* You can use numeric for number only and placerholder color to set collor*/}
              
     
        </View>
       
     </View>
    )
}


const styles=StyleSheet.create({
    
  MainText :{
    textAlign:"center",
    fontSize:20 ,
    color:"white",
   },
ContentBackground: {
    backgroundColor:"#36393f",
    justifyContent:"flex-start",
    alignItems:"stretch",
    paddingVertical:10,
    paddingHorizontal:20,
    flex:0.8,

          }, 
          Contenttop: {
            backgroundColor:"#1e1e1e",
            justifyContent:"center",
            alignItems:"center",
            borderTopRightRadius:20,
            borderTopLeftRadius:20,
            flexDirection:"row",
            flex:0.15,
            borderColor:"#a9a9a9",
            borderWidth:4,
            borderBottomWidth:1,
          },
          ContentTopPic:{
            alignItems:"flex-start",
            padding:10,
            resizeMode:"cover",
            flex:0.2
          },
          ContentTopText:{
            alignItems:"flex-start",
            flex:0.8
          },
          Contentmid: {
            flex:0.5,
            backgroundColor:"#292b2f",
            justifyContent:"center",
            alignItems:"center",
            borderColor:"#a9a9a9",
            borderWidth:4,
            borderBottomWidth:1,
            borderTopWidth:0,
            
          },
          Contentbot: {
            backgroundColor:"#292b2f",
            justifyContent:"flex-start",
            alignItems:"flex-start",
            paddingHorizontal :10,
            paddingVertical:10,
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
            borderColor:"#a9a9a9",
            borderWidth:4,
            borderTopWidth:0,
           flex:0.5,
          },
          
          ContentbotComment:{
            borderWidth:1,
          padding:5,
            backgroundColor:"#191919",
            color:"#fff",
            marginTop:5,
          flex:0.5,
          }
        
});