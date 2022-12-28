import React from "react";
import { StyleSheet, Image } from "react-native";
import Animated from "react-native-reanimated";

export default class Content extends React.Component {
  render() {
    return (
      <Image
        source={require("./assets/phonics_1_5.png")}
        style={styles.image}
      />
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "tomato",
    width: 200,
    height: 200,
  },
  image: {
    width: 724,
    height: 1024,
  },
});
