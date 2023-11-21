import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout,
  List,
  ListItem,
  Divider,
  useTheme,
} from "@ui-kitten/components";

import { BackAction } from "../../components/backAction";
import { Iconify } from "react-native-iconify";
import { ScreenView } from "../../components/CustomView";
import SearchIconSVG from "../../assets/svg/searchIcon.svg";

const DeleteIcon = (props) => <Icon {...props} name="close-outline" />;

const data = [
  { title: "kangaroo" },
  { title: "kanga festival" },
  { title: "kanga loader" },
  { title: "kanga training" },
  { title: "kanga winnie the pooh" },
];

const SearchEvents = ({ navigation }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const renderItemAccessory = (props) => (
    <Iconify
      color={theme["color-basic-500"]}
      size={20}
      icon={"solar:minimalistic-magnifer-linear"}
    />
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={() => <Text style={styles.historyItem}>{item.title}</Text>}
      accessoryLeft={renderItemAccessory}
      onPress={() => navigation.navigate("SearchResults")}
    />
  );

  const renderDeleteIcon = (props) => (
    <TouchableOpacity onPress={() => setValue("")}>
      <DeleteIcon {...props} />
    </TouchableOpacity>
  );

  const renderTitle = () => (
    <Layout
      style={{ flexDirection: "row", alignItems: "center", marginLeft: -20 }}
    >
      <BackAction navigation={navigation} />
      <Text category="h4" status="primary">
        Search Events
      </Text>
    </Layout>
  );


  return (
    <ScreenView>
      <View style={styles.container}>
        <TopNavigation title={renderTitle} alignment="start" />
        <Input
          placeholder="Search for events"
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          accessoryRight={renderDeleteIcon}
        />

        <List
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </View>
    </ScreenView>
  );
};
export default SearchEvents;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    // flexDirection:"last-baseline"
    // justifyContent: "flex-start",
  },
  historyList: {
    flexDirection: "row",
  },
  historyItem: {
    marginLeft: 10,
  },
});
