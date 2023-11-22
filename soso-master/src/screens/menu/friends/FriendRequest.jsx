import {
  Layout,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { FriendItemRequest } from "../../../components/cards/FriendCard";
import { BackAction } from "../../../components/backAction";

import { default as s } from "../FriendsStyle";

const Requests = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  return (
    <View>
      <ScrollView style={styles.scroll}>
        <Layout style={styles.subHeaderGroup}>
          <Text category="h4" style={styles.subHeader}>
            5 requests
          </Text>
        </Layout>
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
  const styles = useStyleSheet(s);

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
