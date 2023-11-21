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
import {
  FriendItemRequest,
  FriendItemSuggestion,
} from "../../../components/FriendCard";

const Requests = ({ navigation, route }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text category="h4" status="primary">
          Requests
        </Text>
        <TouchableOpacity
          // appearance="ghost"
          onPress={() => {
            navigation.navigate("FriendRequest");
          }}
          style={{ flexDirection: "row", gap: 5 }}
        >
          <Text>View all 5</Text>
          <Iconify size={20} icon="fluent:chevron-right-16-regular" />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 10 }}>
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
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text category="h4" status="primary">
          Suggestions
        </Text>
        <TouchableOpacity
          // appearance="ghost"
          onPress={() => {
            navigation.navigate("FriendSuggestion");
          }}
          style={{ flexDirection: "row", gap: 5 }}
        >
          <Text>View all</Text>
          <Iconify size={20} icon="fluent:chevron-right-16-regular" />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 10 }}>
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
          <View style={{ gap: 22 }}>
            <Requests navigation={navigation} />
            <Suggestions navigation={navigation} />
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default AddFriends;
