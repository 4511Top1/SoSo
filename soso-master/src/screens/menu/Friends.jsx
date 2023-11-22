import {
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { FriendItem } from "../../components/cards/FriendCard";
import { BackAction } from "../../components/backAction";
import { default as s } from "./FriendsStyle";

// Sub-screens
import AddFriends from "./friends/AddFriends";
import FriendRequest from "./friends/FriendRequest";
import FriendSuggestion from "./friends/FriendSuggestion";
export { AddFriends, FriendRequest, FriendSuggestion };

const Friends = ({ navigation, route }) => {
  const styles = useStyleSheet(s);
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        accessoryRight={
          <TopNavigationAction
            icon={<Iconify size={35} icon="solar:user-plus-rounded-linear" />}
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
          <View style={styles.friendListContainer}>
            <Text category="h4" style={styles.subHeader}>
              Your friends
            </Text>
            <View style={styles.friendList}>
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
