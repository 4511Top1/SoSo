import {
  Input,
  Layout,
  Text,
  TopNavigation,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Iconify } from "react-native-iconify";
import { ScreenNormalView, ScreenView } from "../../components/CustomView";
import { HorizontalLine } from "../../components/dividers/Lines";
import { BackAction } from "../../components/backAction";
import { default as s } from "./SettingsStyle";

// Sub-screens
import CustomerSupport from "./settings/CustomerSupport";
import DataPrivacy from "./settings/DataPrivacy";
import EditPassword from "./settings/EditPassword";
import FAQ from "./settings/FAQ";
import RegionLanguage from "./settings/RegionLanguage";
import TermsCondition from "./settings/TermsCondition";
export {
  CustomerSupport,
  DataPrivacy,
  EditPassword,
  FAQ,
  RegionLanguage,
  TermsCondition,
};

const SettingsCardList = ({ navigation, title, items }) => {
  const theme = useTheme();
  const styles = useStyleSheet(s);

  return (
    <View style={{ gap: 10 }}>
      <Text category="h4" style={styles.subHeader}>
        {title}
      </Text>
      <Layout style={styles.listContainer}>
        {items &&
          items.map((item, index) => {
            return (
              <View key={index}>
                {item.title ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(item.path);
                    }}
                  >
                    <View style={styles.listItem}>
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
  const theme = useTheme();
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
            <Input
              placeholder="Search in settings"
              accessoryLeft={
                <Iconify
                  color={theme["color-basic-500"]}
                  size={20}
                  icon={"solar:minimalistic-magnifer-linear"}
                />
              }
            />
            <SettingsCardList
              title="App settings"
              navigation={navigation}
              items={[
                { title: "Region & language", path: "RegionLanguage" },
                {},
                { title: "Data privacy", path: "DataPrivacy" },
              ]}
            />
            <SettingsCardList
              title="Help center"
              navigation={navigation}
              items={[
                { title: "FAQ", path: "FAQ" },
                {},
                { title: "Customer support", path: "CustomerSupport" },
                {},
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
                { title: "Edit password", path: "EditPassword" },
                {},
                { title: "Logout", path: "Login" },
              ]}
            />
          </View>
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default Settings;
