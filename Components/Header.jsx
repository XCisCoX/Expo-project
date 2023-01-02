import React from "react";
import {View,Text,StyleSheet} from "react-native" ;
import {faker, Faker} from '@faker-js/faker'
export default function HeaderApp(probs){
    return (
        
        <View style={styles.HeaderBackground}>
        <Text style={[styles.MainText,{color:"#fff"}]}>{probs.s}</Text>
     </View>

    )
}
      
const styles=StyleSheet.create({

    HeaderBackground: {
        flex:0.15,
        backgroundColor:"#202225",
        justifyContent:"center",
    },
     MainText :{
                textAlign:"center",
                fontSize:24
    },
            
      
});
