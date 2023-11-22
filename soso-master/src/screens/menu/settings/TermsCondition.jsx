import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { BackAction } from "../../../components/backAction";
import { ScreenNormalView, ScreenView } from "../../../components/CustomView";
import {
  Avatar,
  useTheme,
  Text,
  Input,
  Layout,
  Card,
  TopNavigation,
  Button,
} from "@ui-kitten/components";
import { Iconify } from "react-native-iconify";

const TermsCondition = ({ navigation, route }) => {
  const infos = [
    {title: "1. Introduction", content: [
      {subtitle: "1.1 Acceptance of Terms", text: "By accessing and using the SoSo application, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, you must not use the App."},
      {subtitle: "1.2 Changes to Terms", text: "SoSo reserves the right to modify these Terms at any time. We will notify users of any significant changes and your continued use of the App following such changes will constitute your acceptance of the new Terms."},
    ]},
    {title:"2. Use of the App", content: [
      {subtitle: "2.1 User Account", text: "To access certain features of the App, you are responsible for maintaining the confidentiality of your account information and for all activities under your account."},
      {subtitle: "2.2 Prohibited Conduct", text: "You agree not to engage in any conduct that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, or otherwise objectionable while using the App."},
    ]},
    {title:"3. Content and Services", content: [
      {subtitle: "3.1 User Content", text: "Users may post content to the App. You are solely responsible for your content and the consequences of posting or publishing it."},
      {subtitle: "3.2 Intellectual Property", text: "SoSo respects the intellectual property rights of others and expects its users to do the same."},
    ]},
    {title:"4. Disclaimers and Limitations of Liability", content: [
      {subtitle: "4.1 Limitation of Liability", text: "SoSo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the App."},
    ]},
    {title:"5. Termination", content: [
      {subtitle: "5.1 Termination of Use", text: "SoSo may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."},
    ]},
    {title:"6. Contact Information", content: [
      {subtitle: "6.1 Contact Us", text: "If you have any questions about these Terms, please contact us."},
    ]},
  ]
  return (
    <ScreenNormalView>
      <TopNavigation
        accessoryLeft={<BackAction navigation={navigation} />}
        title={
          <View>
            <Text category="h2" status="primary">
              Terms & conditions
            </Text>
          </View>
        }
        alignment="start"
      />
      <ScrollView>
        {infos.map((info, key) => (
          <View style={{marginBottom:25, marginHorizontal:20}}>
            <Text category="s1" style={{fontSize:20, marginVertical:10}}>{info.title}</Text>
            {info.content.map((sub) => (
              <View style={{marginBottom:10}}>
                <Text category="s1">{sub.subtitle}</Text>
                <Text category="p2">{sub.text}</Text>
              </View>
            ))}
          </View>
        ))}

      </ScrollView>
    </ScreenNormalView>
  );
};

export default TermsCondition;
