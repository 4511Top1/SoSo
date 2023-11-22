// Sub-screens
import Friends, {
  AddFriends,
  FriendRequest,
  FriendSuggestion,
} from "./menu/Friends";
import PastEvents from "./menu/PastEvents";
import Saved from "./menu/Saved";
import Settings, {
  CustomerSupport,
  DataPrivacy,
  EditPassword,
  FAQ,
  RegionLanguage,
  TermsCondition,
} from "./menu/Settings";
import MenuVerifyID, {
  IdentityVerification,
  IdentityVerificationSuccess,
} from "./menu/VerifyID";
export {
  AddFriends,
  CustomerSupport,
  DataPrivacy,
  EditPassword,
  FAQ,
  FriendRequest,
  FriendSuggestion,
  Friends,
  IdentityVerification,
  IdentityVerificationSuccess,
  MenuVerifyID,
  PastEvents,
  RegionLanguage,
  Saved,
  Settings,
  TermsCondition,
};

import {
  Avatar,
  Layout,
  Text,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../components/CustomView";
import { default as s } from "./MenuStyle";

const ProfileCard = ({ username, navigation }) => {
  const theme = useTheme();
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("MyUserProfile");
      }}
    >
      <View style={styles.userCard}>
        <Avatar
          size="giant"
          source={require("../assets/pfp/profile_placeholder.jpeg")}
        />
        <View style={styles.userCardContainer}>
          <Text category="s1" appearance="alternative">
            {username}
          </Text>
          <Text category="p2" appearance="hint">
            View profile
          </Text>
        </View>
        <Iconify
          size={25}
          color={theme["color-basic-600"]}
          icon="fluent:chevron-right-16-regular"
        />
      </View>
    </TouchableOpacity>
  );
};

const MenuCard = ({ title, icon, navigation }) => {
  const styles = useStyleSheet(s);

  return (
    <TouchableOpacity
      onPress={() => {
        const dest = title.replace(/ /g, "");
        navigation.navigate(dest.includes("Verify") ? `Menu${dest}` : dest);
      }}
    >
      <Layout style={styles.menuCard}>
        {icon}
        <Text category="s1">{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

const Menu = ({ navigation }) => {
  const styles = useStyleSheet(s);

  return (
    <ScreenNormalView>
      <TopNavigation
        style={styles.topNav}
        title={
          <Layout>
            <Text category="h2" status="primary">
              Menu
            </Text>
          </Layout>
        }
        alignment="start"
      />
      <ScreenView>
        <ProfileCard username="Zoe" navigation={navigation} />
        <View style={styles.menuGrid}>
          <MenuCard
            title="Friends"
            icon={<Iconify size={40} icon="solar:users-group-rounded-linear" />}
            navigation={navigation}
          />
          <MenuCard
            title="Saved"
            icon={<Iconify size={40} icon="fluent:bookmark-16-regular" />}
            navigation={navigation}
          />
          <MenuCard
            title="Past Events"
            icon={<Iconify size={40} icon="solar:calendar-date-linear" />}
            navigation={navigation}
          />
          <MenuCard
            title="Verify ID"
            icon={<Iconify size={40} icon="solar:shield-check-linear" />}
            navigation={navigation}
          />
          <MenuCard
            title="Settings"
            icon={<Iconify size={40} icon="solar:settings-linear" />}
            navigation={navigation}
          />
        </View>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default Menu;
