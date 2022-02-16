import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import BottomView from "../src/components/BottomView";
import Slider from "@react-native-community/slider";
import Styles from "./Style";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MusicPlayer() {
  return (
    <View style={Styles.Topcontainer}>
      <View style={{ flex: 1 }}>
        <View style={Styles.container}>
          <Text style={Styles.textStyle}>Music Palyer</Text>
          <Image
            style={Styles.ImageStyle}
            source={require("../assets/Retro-Sunburst-Music-Background.webp")}
          />

          <Text style={Styles.textStyle}>Song Name</Text>
          <Text style={Styles.textArtist}>Artist Name</Text>
          <Slider
            style={Styles.Slider}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="green"
            maximumTrackTintColor="#000000"
            value={0}
            thumbTintColor="green"
          />
          <View style={Styles.TimeStyle}>
            <Text>0.00</Text>
            <Text>3.55</Text>
          </View>
        </View>
        <View style={Styles.PlayerController}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="caret-back" size={50} color="#E67700" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ios-pause-circle" size={70} color="#E67700" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="caret-forward" size={50} color="#E67700" />
          </TouchableOpacity>
        </View>
      </View>

      <BottomView />
    </View>
  );
}
