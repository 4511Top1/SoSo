import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>I am home page!</Text>
      <Button title="Click me to login" onPress={() => navigation.navigate("Login")}></Button>
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