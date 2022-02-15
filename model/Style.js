import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  Topcontainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "lightblue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  PlayerController: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // width: "60%",
    paddingHorizontal: 70,
  },
});

export default Styles;
