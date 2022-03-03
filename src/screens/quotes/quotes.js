import React, {useState,useEffect} from 'react';
import { Text, View, FlatList,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle';


const cuotesScreen  = (props) => {

    const [data,setData] = useState([]);

    const loaadData = async() => {
        const url = 'https://www.breakingbadapi.com/api/quotes';
        const response = await fetch(url,{
            method: 'GET'
        });
        const serverData = await response.json();
        setData(serverData);

        console.log("data "+JSON.stringify(serverData.quote));

    }

    useEffect(() => {
        loaadData();
    },[]);

return (
    <View style={Style.container}>
        <View style={{alignItems: 'center'}}>
            <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg", width:200,height:100 }}/>
        </View>
         <Text style={{backgroundColor:"green" ,padding:5,width:"100%",textAlign:"center",fontWeight:"bold",color:"white"}}>QUOTES</Text>
         <Text>{data.quote_id}</Text>
         <FlatList
         data={data}
         keyExtractor={item => item.quote_id}
         renderItem={nItem =>
            <View style={Style.scrol}>
                <TouchableOpacity style={{margin:5,alignItems:"center",justifyContent:"center"}}>
                    <Text style={Style.chrText}>{nItem.item.quote}</Text>
                    <Text style={{fontWeight:"bold",fontSize:20}}>{nItem.item.author}</Text>
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

export default cuotesScreen;