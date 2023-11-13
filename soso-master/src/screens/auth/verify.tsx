import { Button } from "@ui-kitten/components";
import React from "react";
import { View, Text } from "react-native";

const Verify = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text>Why verify your account?</Text>
        <Text>
          In an effort to make SoSo a safer community, we recommend that you
          verify your identity. Your data will be deleted once verified, and you
          will be able to gain a few perks as well!
        </Text>
      </View>
      <View>
        <Text>Access to all events</Text>
        <Text>
          You will be able to fund and register events that are restricted for
          verified users only.
        </Text>
      </View>
      <View>
        <Text>Restrict events</Text>
        <Text>
          Similar to how you gain access to all events, once verified, you will
          be able to configure the restriction for your event.
        </Text>
      </View>
      <View>
        <Text>Safe community</Text>
        <Text>
          Verified identity ensures other users that you are a real person and
          vice-versa.
        </Text>
      </View>
      <Button onPress={() => navigation.navigate("VerifyID")}>Verify</Button>
      <Text>Skip for now</Text>
    </View>
  );
};
export default Verify;
