/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation/navigation";

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    backgroundColor: "#e0c2c0",
  },
});

export default App;
