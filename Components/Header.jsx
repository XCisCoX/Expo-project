import React from "react";
import {View,Text,StyleSheet} from "react-native" ;

export default function HeaderApp(probs){
    return (
        <View style={styles.HeaderBackground}>
        <Text style={[styles.MainText,{color:"#fff"}]}>{probs.s}</Text>
     </View>

    )
}
      
const styles=StyleSheet.create({

    HeaderBackground: {
        flex:0.2,
        backgroundColor:"#01a1b5",
        justifyContent:"center",
    },
     MainText :{
                textAlign:"center",
                fontSize:24
    },
            
      
});
