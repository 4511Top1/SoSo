import { Text, TopNavigation, useStyleSheet } from "@ui-kitten/components";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import {
  FriendItemRequest,
  FriendItemSuggestion,
} from "../../../components/cards/FriendCard";
import { BackAction } from "../../../components/backAction";
import { default as s } from "../FriendsStyle";

const Requests = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  return (
    <View>
      <View style={styles.subHeaderGroup}>
        <Text category="h4" style={styles.subHeader}>
          Requests
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FriendRequest");
          }}
          style={styles.subHeaderButton}
        >
          <Text>View all 5</Text>
          <Iconify size={20} icon="fluent:chevron-right-16-regular" />
        </TouchableOpacity>
      </View>
      <View style={styles.friendList}>
        <FriendItemRequest
          username="Gary"
          subtitle="3 days"
          navigation={navigation}
        />
        <FriendItemRequest
          username="Toby"
          subtitle="4 days"
          navigation={navigation}
        />
        <FriendItemRequest
          username="Michael"
          subtitle="5 days"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const Suggestions = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  return (
    <View>
      <View style={styles.subHeaderGroup}>
        <Text category="h4" style={styles.subHeader}>
          Suggestions
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("FriendSuggestion");
          }}
          style={styles.subHeaderButton}
        >
          <Text>View all</Text>
          <Iconify size={20} icon="fluent:chevron-right-16-regular" />
        </TouchableOpacity>
      </View>
      <View style={styles.friendList}>
        <FriendItemSuggestion
          username="Sherlock"
          subtitle="past activities"
          navigation={navigation}
        />
        <FriendItemSuggestion
          username="Holmes"
          subtitle="interests"
          navigation={navigation}
        />
        <FriendItemSuggestion
          username="Torbjorn"
          subtitle="MBTI"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const AddFriends = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

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
      <ScrollView>
        <ScreenView>
          <View style={styles.friendListContainer}>
            <Requests navigation={navigation} />
            <Suggestions navigation={navigation} />
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default AddFriends;
