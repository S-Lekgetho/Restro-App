import React from "react";
import { View, Text, TouchableOpacity, Touchable, FlatList, Image, Button } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Meals =[


{
    id:1,
    imageUrl: 'https://assets.epicurious.com/photos/588a497e15872cb7073f2240/master/w_2000,h_1333,c_limit/charred-chicken-with-sweet-potatoes-and-oranges-BA-011917.jpg',
    name:"Paprica",
    price:'199.95',
    currencySymbol:"R",
    ingredients:""
},

{
    id:2,
    imageUrl: "https://img.taste.com.au/WMldfrFD/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg",
    name:"Sauced Shrimp",
    price:'159.95',
    currencySymbol:"R",
    ingredients:"" 
},

{
    id:3,
    imageUrl: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/19/0/FNM_010114-Penne-with-Butternut-Squash-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1388777593000.jpeg",
    name:"Bacon Wrap",
    price:'295.95',
    currencySymbol:"R",
    ingredients:"" 
},


]

const FoodMenuScreen = ({navigation})=>{
    const FoodItem = ({imageUrl, name, price, currencySymbol, ingredients}) =>{
       return(
           <View style={{marginVertical:10}}>
               <Image style={{width:'80%', height:175, borderTopLeftRadius:37, borderTopRightRadius:37, alignSelf:'center', marginTop: 25}} source={{uri:imageUrl}}  />
                 <View style={{marginTop:-37, marginLeft:55}}>
                   <Text style={{ color:'black', fontSize:20, fontFamily:'Roboto', fontWeight:'bold'}}>{name}</Text>
                </View>
                 <View>
                     <Text>{ingredients}</Text>
                 </View>
                <View>
                <View style={{width:'80%', borderWidth:1, borderColor:'black', alignSelf:'center', height:75, marginTop:-1, backgroundColor:'#055567', borderTopRightRadius:35, borderTopLeftRadius:35}}>
                    <Text style={{marginTop:30, alignSelf:'flex-start', marginLeft:10, fontSize:17, color:'white', }}>{currencySymbol}{price}</Text>
                <View style={{height: 10, width:75, alignSelf:'center', bottom:30}}>
                    <Button title="Order" color="gold"/>
                </View>
                </View>
                </View>
           </View>
       )
    }
    return(
       <View style={{width:'100%', height:55, backgroundColor:'#055567', borderBottomRightRadius:25, borderBottomLeftRadius:25}}>
          <Text style={{color:'white', fontSize:20, fontWeight:'bold', alignSelf:'center', fontFamily:'Roboto',  }}>FOOD MENU</Text>
          
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
            data={Meals}
            keyExtractor={item =>item.id}
            renderItem={({item}) =>(<FoodItem imageUrl={item.imageUrl} name={item.name} currencySymbol={item.currencySymbol} price={item.price} ingredients={item.ingredients}/>)}
            />
            
        </View>
       </View>
    )
}


export default FoodMenuScreen;