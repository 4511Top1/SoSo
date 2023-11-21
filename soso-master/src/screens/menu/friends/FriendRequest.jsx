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

const FriendRequest = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Friend requests
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView>
        <Text>Hello</Text>
      </ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default FriendRequest;
