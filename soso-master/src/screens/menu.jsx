import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import UserChat from "./chat/UserChat";
import { ScreenNormalView, ScreenView } from "../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const ProfileCard = ({ username, navigation }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          backgroundColor: theme["color-primary-600"],
          alignItems: "center",
          gap: 10,
          // paddingHorizontal: 15,
          paddingLeft: 15,
          paddingRight: 10,
          paddingVertical: 10,
          borderRadius: 15,
          marginBottom: 20,
          shadowOpacity: 0.3,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        <Avatar
          size="giant"
          source={require("../assets/pfp/profile_placeholder.jpeg")}
        />
        <View style={{ flexDirection: "column", flex: 1 }}>
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
  return (
    <TouchableOpacity>
      <Layout
        style={{
          width: 165,
          height: 80,
          justifyContent: "center",
          gap: 3,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 15,
          shadowOpacity: 0.1,
          shadowRadius: 3,
          shadowOffset: { width: 0, height: 4 },
        }}
      >
        {icon}
        <Text category="s1">{title}</Text>
      </Layout>
    </TouchableOpacity>
  );
};

const Menu = () => {
  const theme = useTheme();

  return (
    <ScreenNormalView>
      <TopNavigation
        style={{ marginLeft: 10 }}
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
        <ProfileCard username="Zoe" />
        <View style={{ flexWrap: true, flexDirection: "row", gap: 20 }}>
          <MenuCard
            title="Friends"
            icon={<Iconify size={40} icon="solar:users-group-rounded-linear" />}
          />
          <MenuCard
            title="Saved"
            icon={<Iconify size={40} icon="fluent:bookmark-16-regular" />}
          />
          <MenuCard
            title="Past Events"
            icon={<Iconify size={40} icon="solar:calendar-date-linear" />}
          />
          <MenuCard
            title="Verify ID"
            icon={<Iconify size={40} icon="solar:shield-check-linear" />}
          />
          <MenuCard
            title="Settings"
            icon={<Iconify size={40} icon="solar:settings-linear" />}
          />
        </View>
        {/* <ScrollView style={{ overflow: "visible" }}></ScrollView> */}
      </ScreenView>
    </ScreenNormalView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
