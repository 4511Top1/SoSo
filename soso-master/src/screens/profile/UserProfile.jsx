import React from "react";
import { ScrollView, View } from "react-native";
import {
  Text,
  TopNavigation,
  Avatar,
  useStyleSheet,
} from "@ui-kitten/components";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { HorizontalLine, VerticalLine } from "../../components/Lines";
import { default as s } from "./UserProfileStyle";

const UserProfile = ({ props, route, navigation }) => {
  const { username } = route.params;
  const styles = useStyleSheet(s);

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Profile
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScreenView>
        <ScrollView>
          {/* Avatar */}
          <View style={styles.avatarName}>
            <Avatar
              style={styles.avatar}
              source={require("../../assets/pfp/profile_placeholder.jpeg")}
            />
            <Text category="h3" style={styles.name}>
              {username}
            </Text>
          </View>

          {/* Stats */}
          <HorizontalLine />
          <View style={styles.stats}>
            <Text>♥ 0 received</Text>
            <VerticalLine />
            <Text>0 events hosted</Text>
          </View>
          <HorizontalLine />

          <View style={styles.detailContainer}>
            {/* Description */}
            <Text style={styles.description}>No description.</Text>

            {/* Interests */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I am interested in
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Hosted */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I have hosted
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Attended */}
            <View style={styles.detail}>
              <Text category="h4" status="primary">
                I have attended
              </Text>
              <Text>Nothing.</Text>
            </View>
          </View>
        </ScrollView>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default UserProfile;
