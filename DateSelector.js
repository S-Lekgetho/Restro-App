import React, {useState} from "react";
import { View, Text, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export const DateTimeSelector = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View>
        <View style={{width:95, height:20, marginTop:35, alignSelf:'center'}}>
          <Button color="gold" onPress={showDatepicker} title="DATE" />
        </View>
        <View style={{width:95, height:20, marginTop:35, alignSelf:'center'}}>
          <Button color="gold" onPress={showTimepicker} title="TIME" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };



export default DateTimeSelector;