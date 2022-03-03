import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chrText:{
        fontWeight:"bold",
        fontSize:20 ,
         color:"#008000",
         margin:5,

    },
    scrol:{
        backgroundColor:"#fff",
        margin:5,
        alignItems:"center",
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 7,  
        flexDirection: 'row',


    },
    overscrol:{
        backgroundColor:"#fff",
        margin:5,
        alignItems:"center",
        borderRadius:15,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 7,  
    },
    touch:{
        margin:5,
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'row'
    },
    // imgs:{
    //     alignItems:"center",

        
    // }

    episodesTouch:{
        margin:5,
        alignItems:"center",
        justifyContent:"center"
    }

})