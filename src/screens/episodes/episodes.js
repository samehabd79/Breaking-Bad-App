import React, {useState,useEffect} from 'react';
import { Text, View, FlatList,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle';


const episodesScreen  = (props) => {

    const [data,setData] = useState([]);

    const loaadData = async() => {
        const url = 'https://www.breakingbadapi.com/api/episodes';
        const response = await fetch(url,{
            method: 'GET'
        });
        const serverData = await response.json();
        setData(serverData);

        console.log("data "+JSON.stringify(serverData.title));

    }

    useEffect(() => {
        loaadData();
    },[]);

return (
    <View style={Style.container}>
        <View style={{alignItems: 'center'}}>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg", width:200,height:100 }}/>
        </View>
         <Text style={{backgroundColor:"green" ,padding:5,width:"100%",textAlign:"center",fontWeight:"bold",color:"white"}}>EPISODES</Text>
         <Text>{data.episode_id}</Text>
         <FlatList  style={{width:"100%",margin:20}}
         data={data}
         keyExtractor={item => item.episode_id}
         renderItem={nItem =>
            <View style={Style.scrol}>
                <TouchableOpacity style={Style.episodesTouch} onPress={() =>{props.navigation.navigate('episodesCharacter',{char:(nItem.item)})}}>
                    <Text style={Style.chrText}>{nItem.item.title}</Text>
                    <Text style={{fontWeight:"bold"}}>{"Season: "+ nItem.item.season}/{"Episode: "+ nItem.item.episode}            {"Air Date: "+ nItem.item.air_date}</Text>
                </TouchableOpacity>
            </View>
        }
        />
    </View>
)
}



export const screenOptions = navData =>{
    return{
       headerTitle:'',
       headerShown:false,

    }
}

export default episodesScreen;