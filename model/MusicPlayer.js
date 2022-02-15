import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BottomView from "../src/components/BottomView";
import Slider from "@react-native-community/slider";
export default function MusicPlayer() {
  return (
    <View style={styles.Topcontainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Music Player</Text>
        <Slider
          style={styles.Slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="green"
          maximumTrackTintColor="#000000"
          value={0}
        />
      </View>

      <BottomView />
    </View>
  );
}

const styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  textStyle: {
    color: "red",
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  Slider: {
    width: 300,
    height: 40,
  },
});
