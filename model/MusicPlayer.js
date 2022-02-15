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
import Styles from "./Style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MusicPlayer() {
  return (
    <View style={Styles.Topcontainer}>
      <View style={Styles.container}>
        <Text style={Styles.textStyle}>Music Player</Text>
        <Slider
          style={Styles.Slider}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="green"
          maximumTrackTintColor="#000000"
          value={0}
        />
      </View>
      <View style={Styles.PlayerController}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="caret-back" size={50} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="ios-pause-circle" size={70} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="caret-forward" size={50} color="orange" />
        </TouchableOpacity>
      </View>
      <BottomView />
    </View>
  );
}
