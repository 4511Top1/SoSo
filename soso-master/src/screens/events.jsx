import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import {
  ButtonGroup,
  Text,
  Button,
  Input,
  IconRegistry,
  Icon,
  Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const SearchIcon = (props) => <Icon {...props} name="search" />;

const Events = ({ navigation }) => {
  const inputRef = useRef(null);
  const [value, setValue] = React.useState("");

  const handleFocus = () => {
    navigation.navigate("SearchEvents");
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <View style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <Text category="h5" status="primary">
        Events
      </Text>
      <Input
        placeholder="Search"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
        accessoryLeft={SearchIcon}
        onFocus={handleFocus}
        ref={inputRef}
      />
      <Text category="h6">Discovery weekly</Text>
    </View>
  );
};
export default Events;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
