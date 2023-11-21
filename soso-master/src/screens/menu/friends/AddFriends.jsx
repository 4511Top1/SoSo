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

const AddFriends = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Add friends
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView>
        <Text>Hello</Text>
        <Button
          onPress={() => {
            navigation.navigate("FriendRequest");
          }}
        >
          To Request
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("FriendSuggestion");
          }}
        >
          To Suggestion
        </Button>
      </ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default AddFriends;
