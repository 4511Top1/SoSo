import { Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { BackAction } from "../../../components/backAction";

const CustomerSupport = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Customer support
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView></ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default CustomerSupport;
