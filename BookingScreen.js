import React, { useState } from "react";
import { View, Text, Modal, Button } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import DateTimeSelector from "../Components/DateSelector";



const BookingScreen = () => {
    const  [numOfKids, setNumOfKids] = useState(0);
    const [numofAdults, setNumOfAdults] = useState(0);
   
    return(
     <Modal animationType="slide" style={{width:'100%', height:'100%'}}>
        <View style={{backgroundColor:'#055567', width:'100%', height:55, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
            <Text style={{fontFamily:'Roboto', fontSize:20, color:'white', alignSelf:'center', marginTop:10, fontWeight:'bold'}}>TABLE BOOKINGS</Text>
              <View style={{marginTop:195, backgroundColor:'#055567', height:300, width:'80%', borderColor:'gold', borderWidth:0.5, borderRadius:25, alignSelf:'center' }}>
                <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:50}}>
              <View>
                   <AntDesign onPress={()=> setNumOfKids(numOfKids + 1)} name="pluscircleo" size={35} color="gold" />
              </View>
              <View>
                  <Text style={{fontSize:25, color:'white'}}>{numOfKids}</Text>
              </View> 
              
              <View> 
                   <AntDesign onPress={()=> setNumOfKids(numOfKids - 1)} name="minuscircleo" size={35} color="gold" />
               </View>
               
               <View>
                  <Text style={{fontSize:30, fontFamily:'Roboto', color:'white'}}>KIDS</Text>
              </View>
              </View>
           <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
           
              <View>
                   <AntDesign onPress={()=> setNumOfAdults(numofAdults + 1)} name="pluscircleo" size={35} color="gold" />
              </View>
              <View>
                  <Text style={{fontSize:30, fontFamily:'Roboto', color:'white'}}>{numofAdults}</Text>
              </View> 
              
              <View> 
                   <AntDesign onPress={()=> setNumOfAdults(numofAdults - 1)} name="minuscircleo" size={35} color="gold" />
               </View>
               <View>
                  <Text style={{fontSize:30, fontFamily:"Roboto", color:'white'}}>ADULTS</Text>
              </View>
              </View>
            
                   <DateTimeSelector/>
             </View>

            <View style={{width:125, height:17, marginTop:35, alignSelf: "center"}}>  
              <Button color="gold" title="CONFIRM BOOKING" />
            </View>
  
        </View>
    </Modal>
    )
}


export default BookingScreen;