import {
  Layout,
  SelectItem,
  Text,
  TopNavigation,
  useStyleSheet,
  Toggle,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { HorizontalLine } from "../../../components/dividers/Lines";
import { BackAction } from "../../../components/backAction";
import { default as s } from "../SettingsStyle";

const DataPrivacyCardList = ({ navigation }) => {
  const styles = useStyleSheet(s);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  return (
    <Layout style={[styles.listContainer, styles.noSubHeader]}>
      <View>
        <View style={styles.listItem}>
          <Text>Public profile</Text>
          <Toggle checked={checked1} onChange={() => setChecked1(!checked1)} />
        </View>
        <HorizontalLine />
        <View style={styles.listItem}>
          <Text>Share past activities</Text>
          <Toggle checked={checked2} onChange={() => setChecked2(!checked2)} />
        </View>
        <HorizontalLine />
        <View style={styles.listItem}>
          <Text>Share events attended</Text>
          <Toggle checked={checked3} onChange={() => setChecked3(!checked3)} />
        </View>
      </View>
    </Layout>
  );
};

const DataPrivacy = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Data privacy
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
          <DataPrivacyCardList navigation={navigation} />
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default DataPrivacy;
