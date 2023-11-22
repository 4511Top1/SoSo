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
import { HorizontalLine } from "../../../components/dividers/Lines";
import { BackAction } from "../../../components/backAction";
import { default as s } from "../SettingsStyle";

const regionData = [
  "Australia - Sydney",
  "Australia - Melbourne",
  "Australia - Canberra",
  "Singapore - Singapore",
  "Malaysia - Kuala Lumpur",
];
const langData = ["English", "Chinese"];
const currData = ["AUD", "USD", "SGD", "MYR"];

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
  const regionValue = regionSelectedIndex.row
    ? regionData[regionSelectedIndex.row]
    : regionData[0];
  const langValue = langSelectedIndex.row
    ? langData[langSelectedIndex.row]
    : langData[0];
  const currValue = currSelectedIndex.row
    ? currData[currSelectedIndex.row]
    : currData[0];

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
              {regionData.map((title, index) => {
                return <SelectItem key={index} title={title} />;
              })}
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
              {langData.map((title, index) => {
                return <SelectItem key={index} title={title} />;
              })}
            </Select>
          </Layout>
        </View>
        <HorizontalLine />

        <View style={styles.listItem}>
          <Text>Default currency</Text>
          <Layout style={styles.dropDownMed} level="1">
            <Select
              placeholder="Currency"
              value={currValue}
              selectedIndex={currSelectedIndex}
              onSelect={(index) => setCurrSelectedIndex(index)}
            >
              {currData.map((title, index) => {
                return <SelectItem key={index} title={title} />;
              })}
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
