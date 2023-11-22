import {
  Button,
  Icon,
  Input,
  Layout,
  Text,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../../components/CustomView";

const Login = ({ navigation }) => {
  const theme = useTheme();
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
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
      {/* <IconRegistry icons={EvaIconsPack} /> */}
      <KeyboardAvoidingView
        keyboardVerticalOffset={47}
        style={{ flex: 1 }}
        behavior="padding"
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require("../../assets/images/SoSoWhite.png")}
          />
          <View>
            <Layout style={styles.center}>
              <Text style={styles.text} category="h4" status="primary">
                Login
              </Text>
              <Input
                style={styles.userName}
                placeholder="Username"
                value={username}
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
                style={styles.password}
                placeholder="Password"
                value={password}
                secureTextEntry={secureTextEntry}
                accessoryRight={renderIcon}
                accessoryLeft={
                  <Iconify
                    color={theme["color-basic-500"]}
                    size={20}
                    icon={"solar:lock-keyhole-outline"}
                  />
                }
                onChangeText={(nextValue) => setPassword(nextValue)}
              />
              <Layout style={styles.forgotPassword}>
                <Text
                  status="primary"
                  onPress={() => navigation.navigate("Reset")}
                >
                  Forgot Password?
                </Text>
              </Layout>
            </Layout>

            <Layout style={styles.buttonGroup}>
              <Button
                style={styles.button}
                onPress={() => navigation.navigate("Tabs")}
              >
                Login
              </Button>
              <Text style={styles.dontHave}>
                Don't have account?{"  "}
                <Text
                  status="primary"
                  onPress={() => navigation.navigate("Register")}
                >
                  Register
                </Text>
              </Text>
            </Layout>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    paddingTop: 18,
    // color:"43007C",
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
  password: {
    paddingTop: 20,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  forgotPassword: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
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
  buttonGroup: {
    justifyContent: "center",
    alignItems: "center",
  },
  dontHave: {
    marginTop: 20,
  },
});
