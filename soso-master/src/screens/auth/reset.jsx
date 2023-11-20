import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Input, Button, Text, Layout } from "@ui-kitten/components";
import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
import { Iconify } from "react-native-iconify";

const Reset = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  return (
    <ScreenView>
      <View style={styles.container}>
        <BackAction navigation={navigation} />
        <Text category="h5" status="primary" style={styles.title}>
          Reset password
        </Text>
        <Text>
          Please enter your email address to request for a password reset
        </Text>
        <Input
          placeholder="Email"
          value={email}
          style={styles.email}
          accessoryLeft={<Iconify size={20} icon={"iconoir:mail"} />}
          onChangeText={(nextValue) => setEmail(nextValue)}
        />
        <Layout style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("ResetSuccess")}
          >
            Send request
          </Button>
        </Layout>
      </View>
    </ScreenView>
  );
};
export default Reset;

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
  title: {
    marginTop: 54,
  },
  email: {
    marginTop: 22,
  },
  button: {
    marginTop: 35,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    // height:29,
    padding: "10 14",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
