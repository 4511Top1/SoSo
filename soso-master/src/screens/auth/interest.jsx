import React from "react";
import { View } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { ScreenView } from "../../components/CustomView";

const Interest = ({ navigation }) => {
  return (
    <ScreenView>
      <View>
        <Text status="primary" category="h5" style={styles.title}>
          What interests you?
        </Text>
        <Text>
          Choose your intereset to have a better experience with SoSo.
        </Text>
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
        <Layout style={styles.continueButtonGroup}>
          <Button
            style={styles.continueButton}

            onPress={() => navigation.navigate("Verify")}
          >
            Continue
          </Button>
          <Text status="primary">Skip for now</Text>
        </Layout>
      </View>
    </ScreenView>
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
    marginTop: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  button: {
    margin: 2,
  },
  title: {
    marginTop: 104,
  },
  subtitle: {
    textAlign: "center",
  },
  continueButtonGroup:{
    marginTop:35,
    justifyContent:"center",
    alignItems:"center",

  },
  continueButton:{
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    // height:29,
    // padding: "10 14",
    marginBottom:20,
  }
});
