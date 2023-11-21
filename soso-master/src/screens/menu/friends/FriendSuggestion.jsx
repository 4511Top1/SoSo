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

const FriendSuggestion = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Suggestions
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
          <View style={{ gap: 22 }}>
            <Suggestions navigation={navigation} />
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default FriendSuggestion;
