import React from "react";
import { View, Text, Image, FlatList, Button } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Beverages=[
    {
        id:1,
        imageUrl:"https://ideas.hallmark.com/wp-content/uploads/2016/12/Firecracker-fruit-smoothies_600.jpg",
        name:"Jov Smooothie",
        quantity:'750ml',
        price: 15.95,
        currencyCode:"R"
    },

    {
        id:2,
        imageUrl:"https://i1.wp.com/www.missinthekitchen.com/wp-content/uploads/2019/11/Vodka-Cranberry-Cocktail-Image-H-scaled.jpg?resize=720%2C540&ssl=1",
        name:"Cranberry Cocktail",
        quantity:'750ml',
        price: 12.95,
        currencyCode:"R"
    },

    {
        id:3,
        imageUrl:"https://biz-file.com/c/2011/586107.jpg",
        name:"Heineken",
        quantity:'500ml',
        price: 19.95,
        currencyCode:"R"

    },

   

    {
        id:4,
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBe1bKk2bOXAJfEFA6bSCfoSX1OeyPMOv9VrPZ_GL7aYO7_0jRa92QZpw-bfYQBZ3eOI&usqp=CAU",
        name:"Caffe Latte",
        quantity:'750ml',
        price: 25.95,
        currencyCode:"R"
    },

];


const BeverageScreen = ({navigation}) =>{
    const DrinkItem = ({imageUrl, name, quantity, price, currencyCode})=>{
        return(
        <View style={{backgroundColor:'silver'}}>
            <View>
                <Image style={{width:'80%', height: 200, marginTop:25, alignSelf:'center', borderTopLeftRadius: 35, borderTopRightRadius: 35}} source={{uri:imageUrl}}/>
              <View style={{flexDirection:'column'}}>
               <View style={{borderWidth:0.5, borderColor:'black', width:'80%', alignSelf:'center', borderTopRightRadius:35, borderTopLeftRadius:35, height:55, bottom:15, backgroundColor:'#055567' }}>
                   <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginLeft:15, marginTop:-20, fontFamily:'Roboto', alignSelf:'flex-start'}}>{name}</Text>
                   <Text style={{marginTop:20, color:'white', fontSize:18, fontFamily:'Roboto', marginLeft:10}}>{currencyCode}{price}</Text>
               </View>
               <View style={{height:15, width:95, alignSelf:'center', bottom:55 }}>
                   <Button color="gold" title="Order"/>
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
              <FlatList data={Beverages} 
              keyExtractor={item => item.id}
              renderItem={({item})=>(<DrinkItem imageUrl={item.imageUrl} name={item.name} quantity={item.quantity} price={item.price} currencyCode={item.currencyCode} />)}
              />
          </View>
        </View>

        
    )
}


export default BeverageScreen;