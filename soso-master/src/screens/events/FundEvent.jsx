import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  TopNavigation,
  Text,
  Layout,
  useTheme,
  Toggle,
  Input,
  CheckBox,
  Button,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
// import { TouchableOpacity } from "react-native-gesture-handler";

const FundEvent = ({ navigation, route }) => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [agree, setAgree] = React.useState(false);
  const { fromScreen, event } = route.params;

  const onCheckedChange = (isChecked) => {
    setChecked(isChecked);
  };

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -16 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h2" status="primary">
        Fund Event
      </Text>
    </Layout>
  );

  const navigateToSuccess = (event) => {
    // console.log("Navigating to success with event:", event);
    navigation.navigate("FundSuccess", {
      event: event,
      fromScreen: "FundEvent",
    });
  };

  return (
    <ScreenView>
      <TopNavigation title={renderTitle} alignment="start" />
      <View>
        <Text category="h5">Billing information</Text>
        <Layout style={styles.saveContainer}>
          {/* <Switch
            style={styles.switch}
            // checked={checked}
            trackColor={{ false: "#4D4352", true: "#43007C" }}
            thumbColor={checked ? "#f4f3f4" : "#f4f3f4"}
            value={checked}
            onValueChange={onCheckedChange}
          ></Switch> */}

          <Toggle
            status="primary"
            style={styles.toggle}
            checked={checked}
            onChange={onCheckedChange}
          >
            <Text category="s1" style={{ marginLeft: 9 }}>
              Use saved details
            </Text>
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
            accessoryLeft={
              <Iconify
                color={theme["color-basic-500"]}
                size={20}
                icon={"solar:phone-linear"}
              />
            }
            style={styles.input}
            onChangeText={(nextValue) => setPhoneNumber(nextValue)}
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
        <Layout style={styles.payContainer}>
          <Text category="h5">Payment information</Text>
          <Input
            style={styles.input}
            placeholder="Apple Pay"
            value={email}
            accessoryLeft={
              <Iconify
                color={theme["color-basic-500"]}
                size={20}
                icon={"simple-icons:applepay"}
              />
            }
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          <Input
            style={styles.input}
            placeholder="Amount to Fund"
            value={email}
            accessoryLeft={<Text category="p2">AUD</Text>}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          {/* <CheckBox
            checked={agree}
            style={styles.checkBox}
            onChange={(nextChecked) => setAgree(nextChecked)}
          >
            <Text category="s1">I agree to Terms of Service</Text>
          </CheckBox> */}
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
        </Layout>
        <Button style={styles.button} onPress={() => navigateToSuccess(event)}>
          <Text style={styles.fundText}>Pay</Text>
        </Button>
      </View>
    </ScreenView>
  );
};

export default FundEvent;
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
    // justifyContent: "flex-start",
    alignItems: "center",
  },
  checkBox: {
    marginTop: 20,
    marginBottom: 20,
  },

  billContainer: {
    flexDirection: "column",
    spaceBetween: 20,
  },
  payContainer: {
    marginTop: 22,
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
});
