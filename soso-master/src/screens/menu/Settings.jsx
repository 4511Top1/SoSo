import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
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

// Sub-screens
import RegionLanguage from "./settings/RegionLanguage";
import DataPrivacy from "./settings/DataPrivacy";
import FAQ from "./settings/FAQ";
import CustomerSupport from "./settings/CustomerSupport";
import TermsCondition from "./settings/TermsCondition";
import EditPassword from "./settings/EditPassword";
export {
  RegionLanguage,
  DataPrivacy,
  FAQ,
  CustomerSupport,
  TermsCondition,
  EditPassword,
};

const HorizontalLine = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: theme["color-basic-500"],
      }}
    />
  );
};

const SettingsCardList = ({ navigation, title, items }) => {
  const theme = useTheme();

  return (
    <View style={{ gap: 10 }}>
      <Text category="h4" status="primary">
        {title}
      </Text>
      <Layout
        style={{
          shadowOpacity: 0.2,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 4 },
          borderRadius: 15,
          padding: 10,
          gap: 5,
        }}
      >
        {items &&
          items.map((item) => {
            return (
              <View key={item.id}>
                {item.title ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(item.path);
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                      }}
                    >
                      {item.title === "Logout" ? (
                        <>
                          <Text status="danger">{item.title}</Text>
                          <Iconify
                            color={theme["color-danger-500"]}
                            icon="ci:exit"
                          />
                        </>
                      ) : (
                        <>
                          <Text>{item.title}</Text>
                          <Iconify icon="fluent:chevron-right-16-regular" />
                        </>
                      )}
                    </View>
                  </TouchableOpacity>
                ) : (
                  <HorizontalLine />
                )}
              </View>
            );
          })}
      </Layout>
    </View>
  );
};

const Settings = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Settings
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
          <View style={{ gap: 22 }}>
            <Input placeholder="Search in settings" />
            <SettingsCardList
              title="App settings"
              navigation={navigation}
              items={[
                { id: 0, title: "Region & language", path: "RegionLanguage" },
                { id: 1 },
                { id: 2, title: "Data privacy", path: "DataPrivacy" },
              ]}
            />
            <SettingsCardList
              title="Help center"
              navigation={navigation}
              items={[
                { id: 0, title: "FAQ", path: "FAQ" },
                { id: 1 },
                { id: 2, title: "Customer support", path: "CustomerSupport" },
                { id: 3 },
                {
                  id: 4,
                  title: "Terms & condition",
                  path: "TermsCondition",
                },
              ]}
            />
            <SettingsCardList
              title="Account"
              navigation={navigation}
              items={[
                { id: 0, title: "Edit password", path: "EditPassword" },
                { id: 1 },
                { id: 2, title: "Logout", path: "Login" },
              ]}
            />
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default Settings;
