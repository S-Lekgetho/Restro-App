import React, { useState } from "react";
import { View, Modal, Text, Image, ImageBackground, Button } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





const DetailScreen = ({route, navigation}) =>{

 const {name} =route.params;
 const {imageUrl} = route.params;
 const {address} = route.params;
 const {city} = route.params;
  
    return(
  
      <View>
        <View>
           <View>
            <Image style={{width: '100%', height: 300}} source={{uri:imageUrl}}/>
           </View>

             <View>
               <Text style={{fontSize:30, fontFamily: 'Roboto', fontWeight:'bold', marginTop: 25, color:'#055567'}}>{name}</Text>
             </View>
        <View style={{ flexDirection:'row', justifyContent: 'space-around'}}>   
         <View style={{backgroundColor:'#055567', width:"48%", height:230, borderColor: 'black', borderWidth: 2,  borderRadius: 10, marginTop: 25 }}>
         <MaterialIcons style={{alignSelf: 'center', marginTop:5}} name="access-time" size={30} color="white" />
        <View style={{paddingBottom: 10}}>
        <View>
           <Text style={{fontFamily:'Roboto', textAlign: 'center', color: 'white', fontSize:17, marginTop:10}}>WEEKDAYS</Text>
           <Text style={{textAlign:'center', color:'white', fontSize:16}}>Mon-Thurs</Text>
           <Text style={{textAlign:'center', color:'white', fontSize:16}}>Opening Time: 9:00AM</Text>
           <Text style={{textAlign:'center', color:'white', fontSize:16}}>Closing Time: 17:00PM</Text>
         </View>
         <View style={{marginTop:15,}}>
           <Text style={{fontFamily:'Roboto', textAlign: 'center', color: 'white', fontSize:17}}>WEEKENDS</Text>
           <Text style={{color: 'white', fontSize:15, textAlign:'center', }}>Fri-Sun</Text>
           <Text style={{textAlign:'center', color:'white', fontSize:16}}>Opening Time: 9:00AM</Text>
           <Text style={{textAlign:'center', color:'white', fontSize:16}}>Closing Time: 21:30PM</Text>
         </View>
        </View>
         </View>
         <View style={{backgroundColor:'#055567', width:"48%", height:230, borderColor: 'black', borderWidth: 2, borderRadius: 10, marginTop: 25 }}>
            <View>
              <MaterialIcons style={{alignSelf:'center', marginTop:5}} name="location-pin" size={30} color="white" />
            </View>
            <View style={{marginTop:20}}>
               <Text style={{color: 'white', fontSize:17, fontFamily: 'Roboto', alignSelf: 'center'}}>{city}</Text>
               <Text style={{color: 'white', fontSize:17, fontFamily: 'Roboto', alignSelf: 'center'}}>{address}</Text>
            </View>
         </View>
          
          

        </View>
        <View style={{backgroundColor:'#055567', width:'100%', height:350, borderRadius: 35, marginTop: 20,  borderWidth:2, borderColor:'gold' }}>
          <Image style={{width:'100%', height:250, borderTopLeftRadius: 35, borderTopRightRadius: 35}} resizeMode="cover" source={{uri:require('../assets/bookingback.jpg')}}/>
          <View style={{flexDirection:'row', alignSelf:'center'}}>
            <Foundation style={{marginRight:10}} name="calendar" size={37} color="white" />
            <Text style={{fontFamily:'Roboto', fontSize:20, color:'white', marginTop:10}}>BOOK TABLE</Text>
            </View>

           <View style={{width:115, alignSelf:'center', marginTop:10}}>
             <Button onPress={()=>{
               navigation.navigate('Bookings')
             }} color="gold" title="BOOK TABLE" />
           </View>

            
            
            
          </View>

        <View style={{backgroundColor:'#055567', width:'100%', marginTop:20, height:357, borderRadius:35, borderWidth:2, borderColor:'gold'}}>
        <Image style={{width:'100%', height:257, borderTopLeftRadius:35, borderTopRightRadius:35}} source={{uri:require('../assets/foodgrid.jpg')}} />
         <View style={{flexDirection:"row", alignSelf:'center', marginTop:10 }}>
          
          <Ionicons style={{marginRight:7}} name="fast-food" size={30} color="white" />
          <Text style={{fontFamily:'Roboto', fontSize:20, color:'white', marginTop:5}}>EXPLORE FOOD MENU</Text>
         </View>
         <View style={{width:115, alignSelf:'center'}}>
          <Button onPress={()=>{
            navigation.navigate('FoodMenu')
          }} title="FOOD MENU" color="gold"/>
         </View>
        </View>
        </View>
      </View>
      
   
    )
}



export default DetailScreen;