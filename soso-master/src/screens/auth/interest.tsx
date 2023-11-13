import React from "react";
import { View, Text } from "react-native";
import { Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
const Interest = ({ navigation }) => {
  return (
    <View>
      <Text>What interests you?</Text>
      <Text>Choose your intereset to have a better experience with SoSo.</Text>
      <View style={styles.buttonGroup}>
        <Button style={styles.button} appearance="outline" status="basic">
          Books
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Music
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Movies
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Yoga
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Gaming
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Travelling
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Reading
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Writing
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Philosophy
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Drawing
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Astrology
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Acting
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Hiking
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Dancing
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Food
        </Button>
        <Button style={styles.button} appearance="outline" status="basic">
          Photography
        </Button>
      </View>
      <Button
        style={styles.button}
        appearance="outline"
        onPress={() => navigation.navigate("Verify")}
      >
        Continue
      </Button>
      <Text>Skip for now</Text>
    </View>
  );
};
export default Interest;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    // color:"43007C",
    fontSize: 15,
  },
  center: {
    flexDirection: "column",
  },
  image: {
    width: 308,
    height: 123,
    alignSelf: "center",
    marginTop: 52,
  },
  buttonGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  button: {
    margin: 2,
  },
});
