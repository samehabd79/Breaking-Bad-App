import React, {useState,useEffect} from 'react';
import { Text, View, FlatList,ScrollView, TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle';



const characterScreen  = (props) => {

    const [data,setData] = useState([]);

    const loaadData = async() => {
        const url = 'https://www.breakingbadapi.com/api/characters';
        const response = await fetch(url,{
            method: 'GET'
        });
        const serverData = await response.json();
        setData(serverData);

        console.log("data "+JSON.stringify(serverData.name));

    }

    useEffect(() => {
        loaadData();
    },[]);

    const changeColor = (status) => {
        switch (status) {
            case "Alive":
               return '#008000'
               case 'Presumed dead':
                     return '#FFD700';  
                 case 'Deceased':
                    return '#B22222';          
            default:
                break;
        }
    }
    return (
        <View style={Style.container}>
            <View>
                <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg", width:200,height:100 }}/>
            </View>
             <Text style={{backgroundColor:"#008000" ,padding:5,width:"100%",textAlign:"center",fontWeight:"bold",color:"#fff"}}>CHARACTERS</Text>

             <FlatList style={{width:"100%",margin:20,}}
             data={data}
             keyExtractor={item => item.char_id}
             renderItem={nItem =>
                <View style={Style.scrol}>
                    <View >
                    <TouchableOpacity style={Style.touch} onPress={() =>{props.navigation.navigate('overview',{char:nItem.item,color:changeColor(nItem.item.status)})}}>
                        <View style={Style.imgs}>
                            <Image style={{ width: 100, height: 200 }} source={{ uri: `${nItem.item.img}` }} />
                        </View>
                        <View style={{backgroundColor:changeColor(nItem.item.status),width:10,height:200}}>
                            <Text></Text>
                        </View>
                        <View>
                            <Text style={Style.chrText}>{nItem.item.name}</Text>
                            <Text style={{fontWeight:"bold",fontSize:20,marginLeft:5}}>{nItem.item.nickname}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>
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

export default characterScreen;