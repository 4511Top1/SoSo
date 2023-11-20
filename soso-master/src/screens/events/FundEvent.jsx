import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import {
  TopNavigation,
  Text,
  Layout,
  useTheme,
  Toggle,
  Input,
  CheckBox,
  Button
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../../components/CustomView";
import { BackAction } from "../../components/backAction";
// import { TouchableOpacity } from "react-native-gesture-handler";

const FundEvent = ({ navigation }) => {
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
        Fund Event
      </Text>
    </Layout>
  );

  return (
    <ScreenView>
      <TopNavigation title={renderTitle} alignment="start" />
      <View>
        <Text category="h6">Billing information</Text>
        <Layout style={styles.saveContainer}>
          <Toggle
            status="primary"
            style={styles.toggle}
            checked={checked}
            onChange={onCheckedChange}
          >
            <Text category="s2">Use saved details</Text>
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
            onChangeText={(nextValue) => setPhoneNumber(nextValue)}
          />
          <Input
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
          <Text category="h6">Payment information</Text>
          <Input
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
            placeholder="Amound to Fund"
            value={email}
            accessoryLeft={<Text category="c1">AUD</Text>}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          <CheckBox
            checked={agree}
            onChange={(nextChecked) => setAgree(nextChecked)}
          >
            I agree to Terms of Service
          </CheckBox>
        </Layout>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate("FundEvent")}
        ><Text style={styles.fundText}>Pay</Text></Button>
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
    padding:10,
    borderRadius: 15,
    borderWidth: 1,
    // borderColor: 'green',
    // backgroundColor: 'lightgreen',
  },
  fundText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
