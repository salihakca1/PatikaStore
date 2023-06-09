import React from 'react';
import {  FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View,TextInput} from 'react-native';

import patikaData from '../patika_data.json';
import StoreCard from './components/StoreCard';


function App(){
return(
  
  <SafeAreaView style = {styles.container}>
    <Text style = {styles.headerText}>PATIKA STORE</Text>
    <TextInput inlineImageLeft='search_icon' style={styles.search_input} placeholder="Ara..." />
    <View style = {styles.flatList}>

    <FlatList
      keyExtractor={item => item.id.toString()} //id'yi tek tek alıyoruz bunun sayesinde 
      data = {patikaData}
      renderItem = {({item}) => <StoreCard store={item}/>}
      numColumns={2}
      horizontal
    />
        </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1"
  },
  flatList:{
    backgroundColor:"white",
    alignItems:"center"
  }
  ,
  headerText:{
    fontWeight: 'bold',
    fontSize: 50,
  },
  search_input:{
    backgroundColor: "#eceff1",
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    margin:10,
  }
});


export default App;
