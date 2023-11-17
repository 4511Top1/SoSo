import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Layout,
  List,
  ListItem,
  Divider,
} from "@ui-kitten/components";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { BackAction } from "../../generalComponent/backAction";

import SearchIconSVG from "../../assets/svg/searchIcon.svg";

const SearchIcon = (props) => <Icon {...props} name="search" />;
const DeleteIcon = (props) => <Icon {...props} name="close-outline" />;

const SearchSVG = (props) => (
  <SearchIconSVG {...props} width={19} height={19} />
);

const data = [
  { title: "kangaroo" },
  { title: "kanga festival" },
  { title: "kanga loader" },
  { title: "kanga training" },
  { title: "kanga winnie the pooh" },
];
const renderItemAccessory = (props) => <SearchSVG />;

const renderItem = ({ item, index }) => (
  <ListItem
    title={() => <Text style={styles.historyItem}>{item.title}</Text>}

    accessoryLeft={renderItemAccessory}
  />
);

const SearchEvents = ({ navigation }) => {
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

  const [value, setValue] = React.useState("");
  return (
    <View style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <TopNavigation title={renderTitle} alignment="start" />

      <Input
        placeholder="Search"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        accessoryRight={renderDeleteIcon}
        // onFocus={() => navigation.navigate("SearchScreen")}
      />
      {/* <Layout name="historyList" style={styles.historyList}>
        <Layout name="oneHistory">
          <SearchSVG />
          <Text>Kanga Festival</Text>
        </Layout>
      </Layout> */}
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
      {/* <Button></Button> */}
    </View>
  );
};
export default SearchEvents;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  historyList: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  historyItem: {
    marginLeft: 10,
  },
});
