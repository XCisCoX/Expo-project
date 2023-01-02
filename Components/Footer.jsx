import React from "react";
import {View,Text,StyleSheet} from "react-native" ;
export default function FooterApp(probs)
{
return(

    <View style={styles.FooterBackground}>
    <Text style={[styles.MainText,{color:"#292929",fontSize:11,fontWeight:"bold"}]}>{probs.title}</Text>
 </View>

)

}

const styles=StyleSheet.create({


    FooterBackground: {
        backgroundColor:"#01f1b5",  
        justifyContent:"center",
        flex:0.1
        },

         MainText :{
        textAlign:"center",
         fontSize:24
    },
});