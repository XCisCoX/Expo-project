import React, { useState } from "react";
import {View,Text,StyleSheet} from "react-native" ;
 
//test function


export default function FooterApp(probs)
{
 const [tilteChanger,settitlechanger]=useState(probs.title);
 const [colorChanger,setColorChanger]=useState("#01f1b5");
 const myfunc=()=>{
    return "felan"
}
return(

    <View style={[styles.FooterBackground,{backgroundColor:colorChanger}]} 
    
    onTouchStart={()=>{ 
        if(tilteChanger=="join"){
        settitlechanger("Joined!");
        setColorChanger("#01f1b5")
}
else if(tilteChanger!="Joined"){
         settitlechanger("join");
         setColorChanger("#a90142");
}
    }} >

    <Text style={[styles.MainText,{color:"#292929",fontSize:11,fontWeight:"bold"}]}>{tilteChanger}</Text>
 </View>
)
}

const styles=StyleSheet.create({
    FooterBackground: {
        justifyContent:"center",      
        flex:0.1
        },
         MainText :{
        textAlign:"center",
         fontSize:24
    },
});