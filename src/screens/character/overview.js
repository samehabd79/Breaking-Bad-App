import React, {useState,useEffect} from 'react';
import { Text, View, FlatList,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle';



const overviewScreen  = (props) => {
const detials = props.route.params.char
const color = props.route.params.color
   
    return (
        <View>
            <View style={Style.overscrol}>
            <Image style={{width: 400, height: 530}} source={{uri:detials.img}}/>
                <Text style={{backgroundColor:color,width:"100%",textAlign:"center",padding:10,fontWeight:"bold",fontSize:20}}>{detials.status}</Text>
            </View>
            <View style={{margin:20}}>
                <Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:20}}>Name: </Text>{detials.name}</Text>
                <Text style={{fontSize:20}}><Text style={{fontWeight:"bold",fontSize:20}}>NickName: </Text>{detials.nickname}</Text>
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

export default overviewScreen;