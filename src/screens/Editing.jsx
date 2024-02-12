import {
  View,
  Text,
  Pressable,
  TextInput,
 
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import { setEdit} from "../states/actions/action";
import { useIsFocused } from "@react-navigation/native";

const Editing = ({ navigation }) => {
  const mile = useSelector((state) => state.selectedMile);
  const isFocused = useIsFocused();


 

  const [type, setType] = useState(mile.title);
  const [notes, setNotes] = useState(mile.description);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
 

    
  const tim = date.toLocaleDateString();
  const data = {
    id:mile.id,
    time: tim,
    title: type,
    description: notes,
    
  };

  useEffect(() => {

    if(isFocused){
      setType(mile.title)
      setNotes(mile.description)
      
    }
  

  },[isFocused]);  
 
  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    Palanquin: require("../../assets/fonts/Palanquin-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }



 

  const dateSet = (e, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = () => {
    setShow(true);
  };
 
 
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e2d6cc",
      }}
    >
      <TextInput
        className="mt-1"
        placeholderTextColor="#000"
        style={{
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#bf73f3",
          padding: 10,
          fontSize: 25,
          color: "black",
          opacity: 0.7,
          fontFamily: "Palanquin",
        }}
        placeholder="Milestone Type"
        value={type}
        onChangeText={(text) => setType(text)}
      />
      <TextInput
        className="mt-7"
        placeholderTextColor="#000"
        style={{
          width: "80%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#bf73f3",
          padding: 10,
          fontSize: 25,
          opacity: 0.7,
          color: "black",
          fontFamily: "Palanquin",
        }}
        placeholder="Notes"
        value={notes}
        maxLength={100}
        multiline={true}
        numberOfLines={4}
        onChangeText={(text) => setNotes(text)}
      />

      <Pressable
        style={{
          width: "60%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          opacity: 0.7,
          backgroundColor: "#bf73f3",
          marginTop: 10,
          fontFamily: "Palanquin",
        }}
        onPress={() => showMode()}
      >
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 25,
            fontFamily: "Palanquin",
          }}
        >
          {" "}
          Set Date{" "}
        </Text>
      </Pressable>
      {show && <DateTimePicker mode="date" value={date} onChange={dateSet} />}
      <Pressable
        style={{
          width: "50%",
          height: 50,
          borderWidth: 1,
          borderRadius: 10,
          opacity: 0.7,
          backgroundColor: "#bf73f3",
          marginTop: 10,
          fontFamily: "Palanquin",
        }}
        onPress={() => {
           dispatch(setEdit(data))
       
           
          navigation.navigate("Edit");
         
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 25,
            fontFamily: "Palanquin",
          }}
        >
          {" "}
          Save Edit{" "}
        </Text>
      </Pressable>

      
    </View>
  );
};

export default Editing;
