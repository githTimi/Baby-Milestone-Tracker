import {
  View,
  Text,
  Pressable,
  TextInput,
  Dimensions,
 
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";

const Editing = ({ navigation }) => {
  const mile = useSelector((state) => state.selectedMile);

  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    Palanquin: require("../../assets/fonts/Palanquin-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }



  const [type, setType] = useState(mile.title);
  const [notes, setNotes] = useState(mile.description);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  console.log(mile.title);
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
          Pick Date{" "}
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
        onPress={() => {}}
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

      <Pressable
        style={{
          borderRadius: 20,
          marginTop: 10,
          padding: 10,
          elevation: 2,
          backgroundColor: "#2196F3",
        }}
        onPress={() => {
       

          navigation.navigate("Edit");
          console.log(mile.title);
        }}
      >
        <Text style={{ fontFamily: "Palanquin" }}>Close Edit</Text>
      </Pressable>
    </View>
  );
};

export default Editing;
