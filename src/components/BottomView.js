import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomView() {
  return (
    <View style={styles.BottomView}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="repeat" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="share-outline" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="ellipsis-horizontal" size={30} color="white" />
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
