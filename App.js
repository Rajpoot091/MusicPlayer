import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MusicPlayer from "./model/MusicPlayer";

export default function App() {
  return (
    <View style={styles.container}>
      <MusicPlayer />
      {/* <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor="lightblue"
        translucent={false}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
