import { Button, Input, Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { BackAction } from "../../../components/backAction";

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
        <View>
          <Input
            style={styles.input}
            placeholder="Current Password"
            secureTextEntry={true}
          />
        </View>
        <View>
          <Input
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
          />
        </View>
        <View>
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
