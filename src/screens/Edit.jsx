import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Timeline from "react-native-timeline-flatlist";
import { useFonts } from "expo-font";

import { useSelector, useDispatch } from "react-redux";
import { setId } from "../states/actions/action";

const Edit = ({ navigation }) => {
  const keyData = useSelector((state) => state.mile);

  const dispatch = useDispatch();
  const [fontsLoaded] = useFonts({
    Palanquin: require("../../assets/fonts/Palanquin-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width;

 
  /* const press=()=>{
     console.log('pressed')
     dispatch(setSelectedMile(rowData.id))
     setModalVisible(!modalVisible);
   }  */
  const RH = (percentage) => {
    return (percentage / 100) * screenHeight;
  };

  const lh = RH(25);
  const renderDetail = (rowData, sectionID, rowID) => {
    const title = (
      <Text
        style={{
          fontSize: 24,
          fontFamily: "Palanquin",
          fontWeight: "bold",
          color: "rgb(52,18,74)",
        }}
      >
        {rowData.title}
      </Text>
    );

    const desc = (
      <Text
        style={{
          fontFamily: "Palanquin",
          fontSize: 18,
          color: "rgb(52,18,74)",
        }}
      >
        {rowData.description}
      </Text>
    );

    return (
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          console.log(rowData.id);
          dispatch(setId(rowData.id));
          navigation.navigate("Editing");
        }}
      >
        {title}
        {desc}
      </Pressable>
    );
  };
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg",
        }}
        resizeMode="cover"
        style={{
          height: screenHeight,
          width: screenWidth,
        }}
      >
        {keyData.length === 0 ? (
          <View style={{ paddingTop: lh }}>
            <Text
              className="text-fuchsia-950 text-center "
              style={{ fontFamily: "Palanquin", fontSize: 35 }}
            >
              {" "}
              Add MileStones First
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1, padding: 20 }}>
            <Timeline
              style={styles.list}
              data={keyData}
              separator={true}
              circleSize={20}
              circleColor="rgb(45,156,219)"
              lineColor="rgb(45,156,219)"
              timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
              timeStyle={{
                textAlign: "center",
                backgroundColor: "#ff9797",
                color: "black",
                padding: 5,
                borderRadius: 13,
                overflow: "hidden",
              }}
              renderDetail={renderDetail}
              options={{
                style: { paddingTop: 5 },
              }}
            />

           
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
