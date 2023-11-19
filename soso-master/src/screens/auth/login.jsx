import React from "react";
import { View, SafeAreaView, Image, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Layout } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { Text, Button } from "@ui-kitten/components";
const Login = ({ navigation }) => {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/SoSoWhite.png")}
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

          <Text onPress={() => navigation.navigate("Reset")}>
            {" "}
            Forgot Password?
          </Text>
        </Layout>
        <Button>Login</Button>
        <Layout>
          <Text>Don't have account?</Text>
          <Text onPress={() => navigation.navigate("Register")}>Register</Text>
        </Layout>
      </View>
    </View>
  );
};
export default Login;

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
