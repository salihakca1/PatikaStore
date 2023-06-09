import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCard.style';

const StoreCard = ({store}) =>{
    return(
        <View style = {styles.container}>
        <Image style={styles.Image} source={{uri: store.imgURL}} />
        <View style = {styles.inner_container}>
        <Text style = {styles.title}>{store.title}</Text>
        <Text style = {styles.price}>{store.price}</Text>
        <Text style={styles.inStock}>{store.inStock ?  "" : "STOKTA YOK"} </Text>

        </View>
      
        </View>
    )
}

export default StoreCard;