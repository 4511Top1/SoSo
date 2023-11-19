import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useFirstLaunch } from "../hook/FirstLaunchContext";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  const { isFirstLaunch } = useFirstLaunch();
  return (
    <View style={styles.container}>
      <Text>I am home page!</Text>
      {isFirstLaunch && <Text>This is the first launch!</Text>}
      <Button
        title="Click me to login"
        onPress={() => navigation.navigate("Login")}
      ></Button>
      <Button
        title="Click me to launch"
        onPress={() => navigation.navigate("Splash")}
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
