import {
  View,
  Text,
  Platform,
  StatusBar,
  TextInput,
  Dimensions,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";

import { addMile } from "../states/actions/action";

const Add = () => {
  const dispatch = useDispatch();

  const [fontsLoaded] = useFonts({
    Palanquin: require("../../assets/fonts/Palanquin-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;
 

  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
   
  const tim = date.toLocaleDateString();
 
  const dateSet = (e, selectedDate) => {
    setDate(selectedDate);
    setShow(false);
  };

  const showMode = () => {
    setShow(true);
  };
  const data = {
    time: tim,
    title: type,
    description: notes,
  };

  const submitData = () => {
    dispatch(addMile(data));

    setType("");
    setNotes("");
    setDate(new Date());
  };
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg",
        }}
        resizeMode="cover"
        style={{
          height: screenHeight,
          width: screenWidth,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
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
          {show && (
            <DateTimePicker mode="date" value={date} onChange={dateSet} />
          )}
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
            onPress={() => submitData()}
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
              Add{" "}
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Add;
