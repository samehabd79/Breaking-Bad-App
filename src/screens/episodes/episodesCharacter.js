import React, {useState,useEffect} from 'react';
import { Text, View, FlatList,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle';



const episodesCharacterScreen  = (props) => {
const detials = props.route.params.char
const color = props.route.params.color
   
    return (
        <View>
            <View style={{padding:50,backgroundColor:"#006400"}}>
                <Text style={{backgroundColor:color,width:"100%",textAlign:"center",padding:10,fontWeight:"bold",fontSize:40,color:"#fff"}}>{detials.title}</Text>
            </View>
            <View style={Style.overscrol}>
                <Text style={{backgroundColor:"#008000",width:"100%",textAlign:"center",padding:10,fontWeight:"bold",fontSize:20}}>Characters</Text>
            </View>
            <View style={{margin:20}}>
            
                <Text style={{fontSize:20}}>{detials.characters}</Text>
                
                <Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:20}}>Portrayed: </Text>{detials.portrayed}</Text>
                <Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:20}}>Appearance: </Text>{","+detials.appearance}</Text>
            </View>

        </View>
    )
}


export const screenOptions = navData =>{
    return{
       headerTitle:"",
       headerShown:false,

    }
}

export default episodesCharacterScreen;