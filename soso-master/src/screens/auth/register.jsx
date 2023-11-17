import React from "react";
import { View, SafeAreaView, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { Text, Button } from "@ui-kitten/components";
const Register = ({ navigation }) => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/SoSo_white.png")}
      />
      <View>
        <Layout style={styles.center}>
          <Text style={styles.text}>Register</Text>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={(nextValue) => setUsername(nextValue)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(nextValue) => setConfirmPassword(nextValue)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
        </Layout>
        <Button onPress={() => navigation.navigate("Interest")}>
          Register
        </Button>
        <Layout>
          <Text>Already have an account?</Text>
          <Text onPress={() => navigation.navigate("Login")}>Login</Text>
        </Layout>
      </View>
    </View>
  );
};
export default Register;

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
});
