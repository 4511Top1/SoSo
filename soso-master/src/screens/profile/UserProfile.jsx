import React from "react";
import { ScrollView, View } from "react-native";
import {
  Text,
  TopNavigation,
  Avatar,
  useStyleSheet,
  Button,
} from "@ui-kitten/components";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { HorizontalLine, VerticalLine } from "../../components/Lines";
import { default as s } from "./UserProfileStyle";
import { Iconify } from "react-native-iconify";

const UserProfile = ({ props, route, navigation }) => {
  const { username } = route.params;
  const styles = useStyleSheet(s);

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        accessoryRight={
          <View style={{ marginRight: 10 }}>
            <Iconify size={35} icon="jam:alert" />
          </View>
        }
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

            <Button appearance="outline">Send ♥</Button>
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
              <Text category="h4" style={styles.subHeader}>
                I am interested in
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Hosted */}
            <View style={styles.detail}>
              <Text category="h4" style={styles.subHeader}>
                I have hosted
              </Text>
              <Text>Nothing.</Text>
            </View>

            {/* Events Attended */}
            <View style={styles.detail}>
              <Text category="h4" style={styles.subHeader}>
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
