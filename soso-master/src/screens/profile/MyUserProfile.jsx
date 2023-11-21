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
  Icon,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const MyUserProfile = ({ route, navigation }) => {
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
        <ScrollView style={{ flex: 1 }}></ScrollView>
      </ScreenView>
    </ScreenNormalView>
  );
};

export default MyUserProfile;
