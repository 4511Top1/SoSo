import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
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

// Sub-screens
import IdentityVerification from "./verifyID/IdentityVerification";
import IdentityVerificationSuccess from "./verifyID/IdentityVerificationSuccess";
export { IdentityVerification, IdentityVerificationSuccess };

const MenuVerifyID = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Verify ID
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView>
        <View style={{ gap: 22, marginTop: 20 }}>
          <View>
            <Text category="h4" status="primary">
              Why verify your account?
            </Text>
            <Text category="p1">
              In an effort to make SoSo a safer community, we recommend that you
              verify your identity. Your data will be deleted once verified, and
              you will be able to gain a few perks as well!
            </Text>
          </View>
          <View style={{ gap: 35 }}>
            <View style={{ gap: 10 }}>
              <View>
                <Text category="h5">Access to all events</Text>
                <Text category="p1">
                  You will be able to fund and register events that are
                  restricted for verified users only.
                </Text>
              </View>
              <View>
                <Text category="h5">Restrict events</Text>
                <Text category="p1">
                  Similar to how you gain access to all events, once verified,
                  you will be able to configure the restriction for your event.
                </Text>
              </View>
              <View>
                <Text category="h5">Safer community</Text>
                <Text category="p1">
                  Verified identity ensures other users that you are a real
                  person and vice-versa.
                </Text>
              </View>
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("IdentityVerification");
              }}
            >
              Verify
            </Button>
            <Button
              appearance="ghost"
              status="basic"
              onPress={() => {
                navigation.goBack();
              }}
            >
              Cancel
            </Button>
          </View>
        </View>
      </ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default MenuVerifyID;
