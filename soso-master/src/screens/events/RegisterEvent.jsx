import {
  Button,
  CheckBox,
  Input,
  Layout,
  Text,
  Toggle,
  TopNavigation,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";

const RegisterEvent = ({ navigation }) => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [agree, setAgree] = React.useState(false);

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -16 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h4" status="primary">
        Register for event
      </Text>
    </Layout>
  );

  return (
    <ScreenView>
      <TopNavigation title={renderTitle} alignment="start" />
      <View>
        <Text category="h5">Billing information</Text>
        <Layout style={styles.saveContainer}>
          <Toggle
            status="primary"
            style={styles.toggle}
            checked={checked}
            onChange={onCheckedChange}
          >
            <Text category="s1">Use saved details</Text>
            {/* {`Use saved details`} */}
          </Toggle>
        </Layout>
        <Layout style={styles.billContainer}>
          <Input
            placeholder="Full Name"
            value={username}
            accessoryLeft={
              <Iconify
                color={theme["color-basic-500"]}
                size={20}
                icon={"solar:user-rounded-outline"}
              />
            }
            style={styles.input}
            onChangeText={(nextValue) => setUsername(nextValue)}
          />
          <Input
            placeholder="Phone Number"
            value={phoneNumber}
            style={styles.input}
            accessoryLeft={
              <Iconify
                color={theme["color-basic-500"]}
                size={20}
                icon={"solar:phone-linear"}
              />
            }
            onChangeText={(nextValue) => setPhoneNumber(nextValue)}
          />
          <Input
            placeholder="Email"
            value={email}
            style={styles.input}
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
        <Layout style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            checked={agree}
            style={styles.checkBox}
            onChange={(nextChecked) => setAgree(nextChecked)}
          />
          <Text>{"   "}</Text>
          <Text category="s1">I agree to the {""}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("TermsCondition")}
          >
            <Text category="s1" status="primary">
              Terms of Service
            </Text>
          </TouchableOpacity>
        </Layout>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("RegistrationSuccess")}
        >
          <Text style={styles.fundText}>Register</Text>
        </Button>
      </View>
    </ScreenView>
  );
};

export default RegisterEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveContainer: {
    flexDirection: "row",
    width: 348,
    height: 56,
  },
  billContainer: {
    flexDirection: "column",
    spaceBetween: 20,
  },
  payContainer: {
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#4D4352",
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    // borderColor: 'green',
    // backgroundColor: 'lightgreen',
  },
  fundText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  input: {
    paddingTop: 12,
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
  },
  checkBox: {
    marginTop: 20,
    marginBottom: 20,
  },
});
