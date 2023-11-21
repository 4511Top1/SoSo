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
import { FriendItem } from "../../components/FriendCard";

// Sub-screens
import AddFriends from "./friends/AddFriends";
import FriendRequest from "./friends/FriendRequest";
import FriendSuggestion from "./friends/FriendSuggestion";
export { AddFriends, FriendRequest, FriendSuggestion };

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
              <FriendItem
                username="Vincent"
                subtitle={2023}
                navigation={navigation}
              />
              <FriendItem
                username="Ralph"
                subtitle={2023}
                navigation={navigation}
              />
              <FriendItem
                username="Mary"
                subtitle={2022}
                navigation={navigation}
              />
              <FriendItem
                username="Bella"
                subtitle={2021}
                navigation={navigation}
              />
              <FriendItem
                username="Edward"
                subtitle={2019}
                navigation={navigation}
              />
            </View>
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default Friends;
