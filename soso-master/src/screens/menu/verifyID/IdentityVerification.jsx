import { Button, Input, Text, TopNavigation } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import { BackAction } from "../../../components/backAction";

const IdentityVerification = ({ navigation, route }) => {
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Verify ID
            </Text>
          </View>
        }
        alignment="start"
      />
      {/* <ScrollView> */}
      <ScreenView>
        <View style={{ gap: 22, marginTop: 20 }}>
          <Text category="h4" status="primary">
            Identity Verification
          </Text>

          <View style={{ gap: 20 }}>
            <Input placeholder="Full Name" />
            <Input placeholder="Phone Number" />

            <View style={{ gap: 10 }}>
              <Text category="p1">
                Please upload a photo of your government issued ID (e.g.,
                driver’s license, passport)
              </Text>
              <Button appearance="outline">Upload Photo</Button>
            </View>
          </View>

          <Button
            onPress={() => {
              navigation.navigate("IdentityVerificationSuccess");
            }}
          >
            Submit
          </Button>
        </View>
      </ScreenView>
      {/* </ScrollView> */}
    </ScreenNormalView>
  );
};

export default IdentityVerification;
