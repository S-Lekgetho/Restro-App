import React from "react";
import { FlatList, TouchableOpacity,  } from "react-native-gesture-handler";
import {View, Text, Image, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {Restaurants} from "../DataList/RestaurantsData";




const HomeScreen = ({navigation}) =>{
  const Item = ({imageUrl, name, city, address}) => {

    return(
     

          <View style={styles.container}>
             <Image style={styles.img} source={{uri:imageUrl}} ></Image>
          <View style={styles.descContainer}>

           <View>
              <Text style={styles.text}>{name}</Text>
           </View>

            <View>
              <Text style={styles.restroDescription}>{city}</Text>
              <Text style={styles.restroAddress}>{address}</Text>
            </View>

         </View>
        
        </View>

    );
    };

    return(
     <SafeAreaView>
       <View style={{backgroundColor: '#055567', height: 55, borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}>

         <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', marginTop: 10}}>HOME</Text>
       </View>
       
        <View>    
          <View style={styles.searchBar}>
            <View>
               <EvilIcons style={styles.searchIcon} name="search" size={35} color="white" />
            </View>
            <View>
                <TextInput placeholder="SEARCH" placeholderTextColor='black' style={styles.searchInput} />
            </View>
            
          </View>
    
            <Text style={styles.infoText}>NEARBY SUGGESTIONS</Text>
          
            <FlatList 
            data={Restaurants}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>(
             <TouchableOpacity onPress={()=> navigation.navigate("Details", {imageUrl: item.imageUrl,
             name: item.name, city: item.city, address: item.address } )}>
              <Item imageUrl={item.imageUrl} name={item.name} city={item.city} address={item.address}/>
             </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            />
          
         </View>
        
         <View>
           
            <Image style={styles.map} source={{uri:require("../assets/mapDirections.png")}} />
          
         </View>
       
        
      <View style={{flexDirection: 'row', flex:1, marginTop:45, justifyContent: 'space-around', backgroundColor: '#055567', paddingTop:17, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
      
      <TouchableOpacity>
      
        <View>
            <Ionicons onPress={()=>{
                navigation.navigate("Home")
            }} name="ios-home" size={30} color="white" />
            
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
             <Ionicons onPress={()=>{
                 navigation.navigate("Profile")
             }}  name="ios-person" size={30} color="white" />
             
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
         <MaterialIcons onPress={()=>{
             navigation.navigate("Favorites")
         }} name="favorite" size={30} color="white" />
         
        </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%'
  },
img:{
    width:244, 
    height: 225,
    borderRadius: 27,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35
  },
descContainer:{
    backgroundColor: 'white',
    opacity: '45%',
    width: 125,
    height: 95,
    marginTop: -95,
    alignSelf: 'flex-end',
    marginRight: 55,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10
   
  },

text:{
    fontSize: 16,
    fontFamily: 'Roboto', 
    fontWeight: 'bold',
    color: 'blue',
    opacity: '100%'
},

restroDescription:{
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16
},

restroAddress:{
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'center'
},
searchInput:{
  flex: 1,
  textAlign: 'center',
  marginTop: 35,
  borderRadius: 15,
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  height: 32,
  backgroundColor: 'white',
  paddingLeft: 30,
  paddingRight: 30,
  
},

searchIcon:{
marginTop: 35,
backgroundColor: '#055567',
borderRadius: 20,
width: 36
},

searchBar:{
  flexDirection: 'row',
  justifyContent: 'center',
  maxWidth: '100%'
},

infoText:{
  marginTop:45,
  marginLeft: 45,
  fontWeight: 'bold',
  fontSize: 15 
},

map:{
  height:100, 
  width: 150, 
  alignSelf: 'center', 
  marginTop:20, 
  borderColor:'#00FFE0',
  borderWidth: 2, 
  borderRadius:15
},


  
})


export default HomeScreen;