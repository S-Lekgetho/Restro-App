import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import DetailScreen from './screens/DetailScreen';
import BookingScreen from './screens/BookingScreen';
import FoodMenuScreen from './screens/FoodMenuScreen';
import DessertScreen from './screens/DessertScreen';
import BeverageScreen from './screens/BeverageScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';

const Stack = createNativeStackNavigator();


 const App = () => {

   return(
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
     
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Favorites" component={FavoriteScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Bookings" component={BookingScreen}/>
        <Stack.Screen name="FoodMenu" component={FoodMenuScreen}/>
        <Stack.Screen name="Dessert" component={DessertScreen} />
        <Stack.Screen name="Beverages" component={BeverageScreen}/>
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
   );
   
 };

export default App;



