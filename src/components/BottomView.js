import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomView() {
  return (
    <View style={styles.BottomView}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons
          style={styles.IconStyle}
          name="heart-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons
          style={styles.IconStyle}
          name="repeat"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons
          style={styles.IconStyle}
          name="share-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons
          style={styles.IconStyle}
          name="options"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomView: {
    paddingVertical: 10,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
