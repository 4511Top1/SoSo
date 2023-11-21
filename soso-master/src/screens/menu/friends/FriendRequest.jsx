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
      <ScrollView style={styles.scroll}>
        <Layout style={styles.subHeader}>
          <Text category="h4" status="primary">
            5 requests
          </Text>
        </Layout>
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
          <FriendItemRequest
            username="Priscilla"
            subtitle="a month"
            navigation={navigation}
          />
          <FriendItemRequest
            username="Geraldine"
            subtitle="2 months"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const FriendRequest = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        style={styles.topNav}
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
      <ScreenView>
        <Requests navigation={navigation} />
      </ScreenView>
    </ScreenNormalView>
  );
};

export default FriendRequest;

const styles = StyleSheet.create({
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  topNav: {
    zIndex: 1,
  },
  scroll: {
    zIndex: -1,
    overflow: "visible",
  },
});
