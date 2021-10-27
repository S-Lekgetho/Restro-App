import React from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Desserts = [
    {
        id:1,
        imageUrl:"https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg",
        name:"Milkshake",
        price:"25.95", 
        currencyCode:"R"
    },

    {
        id:2,
        imageUrl:"https://bsstatic.mrjack.es/wp-content/uploads/2020/06/banana-split-cab-2.jpg",
        name:"Banana Split",
        price:"27.95", 
        currencyCode:"R"
    },

    {
        id:3,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdf1oVo0jJgmbXA3AN6N_R0fAFE23DPBU6kZDyX_FxpLTOt0khiP_bhg9J-fVNWuc4NsQ&usqp=CAU",
        name:"Chocolate Mousse",
        price:"25.95", 
        currencyCode:"R"
    },

    {
        id:4,
        imageUrl:"https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/11/brownie-trifle-2.jpg",
        name:"Brownie Trifle",
        price:"25.95", 
        currencyCode:"R"
    },



]

 const DessertScreen = ({navigation}) => {
     const DessertItem = ({imageUrl, name, price, currencyCode}) =>{
         return(
            <View>
             <View>
                 <Image style={{width:'80%', height:200, alignSelf:'center', marginTop:25, borderTopLeftRadius:35, borderTopRightRadius:35, top:20}} source={{uri:imageUrl}}/>
                 <View style={{borderWidth:0.5, borderColor:'black', alignSelf:'center', width:'80%', height:65, borderTopLeftRadius:35, borderTopRightRadius:35, backgroundColor:'#055567'}}>
                     <Text style={{fontFamily:'Roboto', fontSize:19, fontWeight:'bold', marginTop:-25 }}>{name}</Text>
                     <Text style={{marginTop:20, marginLeft:7, fontWeight:'bold', color:'white', fontSize:18, fontFamily:'Roboto'}}>{currencyCode}{price}</Text>
                     <View style={{width:95, height:15, alignSelf:'center', bottom:25 }}>
                         <Button color="gold" title="Order" />
                     </View>
                 </View>
             </View>
            </View>
         )
     }
     return(
        <View style={{width:'100%', height:55, backgroundColor:'#055567', borderBottomRightRadius:25, borderBottomLeftRadius:25}}>
        <Text style={{color:'white', fontSize:20, fontWeight:'bold', alignSelf:'center', fontFamily:'Roboto', marginTop:15 }}>FOOD MENU</Text>
        <View style={{flexDirection:'row', marginTop:55, justifyContent: 'space-around', borderWidth:3, borderColor:'black', paddingTop:17, paddingBottom:17, marginRight:10, marginLeft:10
}}>
    <View>
       <Fontisto name="cocktail" size={35} color="black" onPress={()=>{
           navigation.navigate("Beverages")
       }} />
      
    </View>
    <View>
       <Ionicons name="fast-food-outline" size={35} color="black" onPress={()=>{
           navigation.navigate("FoodMenu")
       }} />
      
    </View>
    <View>
       <MaterialCommunityIcons name="cupcake" size={35} color="black" onPress={()=>{
           navigation.navigate("Dessert")
       }} />
       
       </View>
      </View>
      <View>
          <FlatList
          data={Desserts}
          keyExtractor={item => item.id}
          renderItem={({item})=> (<DessertItem imageUrl={item.imageUrl} name={item.name} price={item.price} currencyCode={item.currencyCode}/>
          )}
          />
      </View>
    </View>

     )
 }

 export default DessertScreen;
