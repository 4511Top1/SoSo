import { Avatar, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";

const FriendCard = ({ username, subtitle, extra, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UserProfile", {
          username: username,
        });
      }}
    >
      <Layout
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          borderRadius: 15,
          paddingLeft: 15,
          paddingRight: 10,
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
        <View style={{ flex: 1 }}>
          <Text category="s1">{username}</Text>
          <Text category="p1" appearance="hint">
            {subtitle}
          </Text>
        </View>
        <View>{extra}</View>
      </Layout>
    </TouchableOpacity>
  );
};

export default FriendCard;

export const FriendItem = ({ username, subtitle, navigation }) => {
  return (
    <FriendCard
      username={username}
      subtitle={`Friends since ${subtitle}`}
      navigation={navigation}
    />
  );
};

export const FriendItemRequest = ({ username, subtitle, navigation }) => {
  return (
    <FriendCard
      username={username}
      subtitle={`From ${subtitle} ago`}
      navigation={navigation}
      extra={
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Iconify size={45} icon="solar:close-circle-linear" />
          <Iconify size={45} icon="solar:check-circle-bold" />
        </View>
      }
    />
  );
};

export const FriendItemSuggestion = ({
  username,
  subtitle,
  specific,
  navigation,
}) => {
  return (
    <FriendCard
      username={username}
      subtitle={specific ? specific : `Based on ${subtitle}`}
      navigation={navigation}
      extra={
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Iconify size={45} icon="solar:add-circle-linear" />
        </View>
      }
    />
  );
};
