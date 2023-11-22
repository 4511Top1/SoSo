import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
  Button,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const EditPassword = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Edit Password
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView>
        <View style={{ marginTop: 20 }}>
          <Text category="h5">Current Password</Text>
          <Input
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text category="h5">New Password</Text>
          <Input
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text category="h5">Confirm New Password</Text>
          <Input
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            Save
          </Button>
        </View>
      </ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default EditPassword;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    // flexDirection:"last-baseline"
    // justifyContent: "flex-start",
  },
  input: {
    borderRadius: 10,
    border: "1px solid rgba(77, 67, 82, 0.15)",
    marginTop: 10,
    // marginHorizontal: 20,
    // marginBottom: 10,
  },
});
