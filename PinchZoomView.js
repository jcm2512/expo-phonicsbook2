import * as React from "react";

import { StyleSheet, View, Text, Image } from "react-native";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";

import Content from "./content";

export default function App({ children }) {
  return (
    <View style={styles.container}>
      <ReactNativeZoomableView
        maxZoom={30}
        // Give these to the zoomable view so it can apply the boundaries around the actual content.
        // Need to make sure the content is actually centered and the width and height are
        // dimensions when it's rendered naturally. Not the intrinsic size.
        // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
        // Therefore, we'll feed the zoomable view the 300x150 size.
        contentWidth={724}
        contentHeight={1024}
      >
        <Image
          source={require("./assets/phonics_1_5.png")}
          style={styles.image}
        />
      </ReactNativeZoomableView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  image: {
    width: 724,
    height: 1024,
  },
});
