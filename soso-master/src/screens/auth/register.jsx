import React from "react";
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,

} from "react-native";
import { StyleSheet } from "react-native";
import { Layout, useTheme, IconRegistry, Icon } from "@ui-kitten/components";
import { Input } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { Text, Button } from "@ui-kitten/components";
import { ScreenView } from "../../components/CustomView";
import { Iconify } from "react-native-iconify";

const Register = ({ navigation }) => {
  const theme = useTheme();
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <ScreenView>
      <IconRegistry icons={EvaIconsPack} />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/images/SoSoWhite.png")}
        />
        <View>
          <Layout style={styles.center}>
            <Text style={styles.text} category="h4" status="primary">
              Register
            </Text>
            <Input
              placeholder="Username"
              value={username}
              style={styles.userName}
              accessoryLeft={
                <Iconify
                  color={theme["color-basic-500"]}
                  size={20}
                  icon={"solar:user-rounded-outline"}
                />
              }
              onChangeText={(nextValue) => setUsername(nextValue)}
            />
            <Input
              style={styles.input}
              placeholder="Password Input"
              value={password}
              accessoryLeft={
                <Iconify
                  color={theme["color-basic-500"]}
                  size={20}
                  icon={"solar:lock-keyhole-outline"}
                />
              }
              secureTextEntry={secureTextEntry}
              accessoryRight={renderIcon}
              // accessoryRight={
              // <Iconify
              //   color={theme["color-basic-500"]}
              //   size={20}
              //   icon={"formkit:hidden"}
              // />

              // }
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Input
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              accessoryLeft={
                <Iconify
                  color={theme["color-basic-500"]}
                  size={20}
                  icon={"solar:lock-keyhole-outline"}
                />
              }
              // accessoryRight={
              //   <Iconify
              //     color={theme["color-basic-500"]}
              //     size={20}
              //     icon={"formkit:hidden"}
              //   />
              // }
              secureTextEntry={secureTextEntry}
              accessoryRight={renderIcon}
              onChangeText={(nextValue) => setConfirmPassword(nextValue)}
            />
            <Input
              style={styles.input}
              placeholder="Email"
              value={email}
              accessoryLeft={
                <Iconify
                  color={theme["color-basic-500"]}
                  size={20}
                  icon={"iconoir:mail"}
                />
              }
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
          </Layout>

          <Layout style={styles.buttonGroup}>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate("Interest")}
            >
              Register
            </Button>
            <Text style={styles.already}>
              Already have an account?{" "}
              <Text
                status="primary"
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </Layout>
        </View>
      </View>
    </ScreenView>
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
    paddingTop: 18,
    // fontSize: 15,
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
  userName: {
    paddingTop: 22,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  input: {
    paddingTop: 20,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  buttonGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 35,
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    width: 271,
    // height:29,
    // padding: "10 14",
  },
  already:{
    marginTop:20,
  }
});
