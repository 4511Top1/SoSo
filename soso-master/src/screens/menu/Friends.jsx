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
  TopNavigationAction,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

// Sub-screens
import AddFriends from "./friends/AddFriends";
import FriendRequest from "./friends/FriendRequest";
import FriendSuggestion from "./friends/FriendSuggestion";
export { AddFriends, FriendRequest, FriendSuggestion };

const FriendItem = ({ username, year, navigation }) => {
  return (
    <TouchableOpacity>
      <Layout
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 10,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        }}
      >
        <Avatar
          style={{ width: 65, height: 65 }}
          source={require("../../assets/pfp/profile_placeholder.jpeg")}
        />
        <View>
          <Text category="s1">{username}</Text>
          <Text category="p1" appearance="hint">
            Friends since {year}
          </Text>
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

const Friends = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        accessoryRight={
          <TopNavigationAction
            icon={<Iconify size={30} icon="solar:user-plus-rounded-linear" />}
            onPress={() => navigation.navigate("AddFriends")}
          />
        }
        title={
          <View>
            <Text category="h2" status="primary">
              Friends
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
          <View
            style={{
              gap: 22,
              flexDirection: "column",
            }}
          >
            <Text category="h4" status="primary">
              Your friends
            </Text>
            <View style={{ gap: 10 }}>
              <FriendItem username="Vincent" year={2023} />
              <FriendItem username="Ralph" year={2023} />
              <FriendItem username="Mary" year={2022} />
              <FriendItem username="Bella" year={2021} />
              <FriendItem username="Edward" year={2019} />
            </View>
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default Friends;
