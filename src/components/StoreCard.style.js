import {Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        container:{
            backgroundColor: 'white',
            margin: 10,
            borderRadius: 10,

        },
        image:{ 
            height: 160,
            width:165,
            borderRadius:10, 
        }, 
        title:{
            fontSize:20,
            fontFamily:"Nunito",
            fontWeight:"bold",
            color:"black",
            width:180,
            paddingLeft:7,
            paddingRight:7,
        },
        price:{
            fontSize:18,
            fontWeight:"bold",
            paddingLeft:7,
            paddingRight:7,
        },
        inStock:{
            fontStyle: 'italic',
            fontSize:18,
            fontWeight:"bold",
            color:"red",
            paddingLeft:7,
            paddingRight:7,
        },
        inner_container:{
            padding: 5,
        },
    }
)
