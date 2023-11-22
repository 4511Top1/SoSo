import {
  IndexPath,
  Layout,
  Select,
  SelectItem,
  Text,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import React from "react";
import { ScrollView, View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { HorizontalLine } from "../../../components/Lines";
import { BackAction } from "../../../components/backAction";
import { default as s } from "../SettingsStyle";

const regionData = [
  "Australia - Sydney",
  "Australia - Melbourne",
  "Australia - Canberra",
  "Singapore - Singapore",
  "Malaysia - Kuala Lumpur",
];

const langData = ["English"];

const currData = ["AUD"];

const RegionCardList = ({ navigation }) => {
  const styles = useStyleSheet(s);
  const [regionSelectedIndex, setRegionSelectedIndex] = React.useState([
    new IndexPath(0),
  ]);
  const [langSelectedIndex, setLangSelectedIndex] = React.useState([
    new IndexPath(0),
  ]);
  const [currSelectedIndex, setCurrSelectedIndex] = React.useState([
    new IndexPath(0),
  ]);
  const regionValue = regionData[regionSelectedIndex.row];
  const langValue = langData[langSelectedIndex.row];
  const currValue = currData[currSelectedIndex.row];

  const renderOption = (title) => <SelectItem title={title} />;

  return (
    <Layout style={[styles.listContainer, styles.noSubHeader]}>
      <View>
        <View style={styles.listItem}>
          <Text>Region</Text>
          <Layout style={styles.dropDown} level="1">
            <Select
              placeholder="Region"
              value={regionValue}
              selectedIndex={regionSelectedIndex}
              onSelect={(index) => setRegionSelectedIndex(index)}
            >
              {regionData.map(renderOption)}
            </Select>
          </Layout>
        </View>
        <HorizontalLine />

        <View style={styles.listItem}>
          <Text>Language</Text>
          <Layout style={styles.dropDown} level="1">
            <Select
              placeholder="Language"
              value={langValue}
              selectedIndex={langSelectedIndex}
              onSelect={(index) => setLangSelectedIndex(index)}
            >
              {langData.map(renderOption)}
            </Select>
          </Layout>
        </View>
        <HorizontalLine />

        <View style={styles.listItem}>
          <Text>Default Currency</Text>
          <Layout style={styles.dropDownMed} level="1">
            <Select
              placeholder="Currency"
              value={currValue}
              selectedIndex={currSelectedIndex}
              onSelect={(index) => setCurrSelectedIndex(index)}
            >
              {currData.map(renderOption)}
            </Select>
          </Layout>
        </View>
      </View>
    </Layout>
  );
};

const RegionLanguage = ({ navigation, route }) => {
  const styles = useStyleSheet(s);

  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Region & language
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        <ScreenView>
          <RegionCardList navigation={navigation} />
        </ScreenView>
      </ScrollView>
    </ScreenNormalView>
  );
};

export default RegionLanguage;
