import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import {
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  Button,
  TopNavigation,
  Avatar,
  Icon,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";
import { HorizontalLine, VerticalLine } from "../../components/Lines";

const MyUserProfile = ({ route, navigation }) => {
  const theme = useTheme();

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              My Profile
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScreenView>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: "center", marginBottom: 10 }}>
            <Avatar
              style={styles.avatar}
              source={require("../../assets/pfp/profile_placeholder.jpeg")}
            />
            <Text category="h3" style={styles.name} status="primary">
              Zoe
            </Text>
          </View>
          <HorizontalLine />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 26,
              paddingVertical: 10,
            }}
          >
            <Text>♥ 0 received</Text>
            <VerticalLine />
            <Text>0 events hosted</Text>
          </View>
          <HorizontalLine />
          <View style={{ gap: 22 }}>
            <Text style={{ marginTop: 10 }}>No description.</Text>
            <View style={{ gap: 10 }}>
              <Text category="h4" status="primary">
                I am interested in
              </Text>
              <Text>Nothing.</Text>
            </View>
            <View style={{ gap: 10 }}>
              <Text category="h4" status="primary">
                I have hosted
              </Text>
              <Text>Nothing.</Text>
            </View>
            <View style={{ gap: 10 }}>
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

export default MyUserProfile;

const styles = StyleSheet.create({
  name: {
    textTransform: "capitalize",
  },
  avatar: {
    width: 180,
    height: 180,
    marginBottom: 22,
  },
});
