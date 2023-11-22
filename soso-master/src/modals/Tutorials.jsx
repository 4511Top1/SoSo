import { Button, Layout, Text, useStyleSheet } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";
import Modal from "react-native-modal";
import MenuCard from "../components/cards/MenuCard";
import { default as s } from "./ModalStyle";

export const HomeTutorial = ({ showTutorial, setShowTutorial }) => {
  const styles = useStyleSheet(s);

  return (
    <View style={styles.modalView}>
      <Modal
        isVisible={showTutorial}
        onRequestClose={() => {
          setShowTutorial(false);
        }}
        style={styles.modal}
        onBackdropPress={() => {
          setShowTutorial(false);
        }}
      >
        <View style={styles.modalContent}>
          <Text category="h4" status="primary">
            Getting Started
          </Text>
          <Layout style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
            <Text category="p1">
              Try out our QuickMatch™ feature that guides you to events and
              friends aligned with your interests in seconds.
            </Text>
            <View style={{ alignItems: "center", gap: 5, marginBottom: 10 }}>
              <Text style={{ marginTop: 10 }} category="s1">
                1. Tap on the Quick Event Matching to quickly match with an
                event.
              </Text>
              <MenuCard
                title="Quick Event Matching"
                icon={<Iconify size={40} icon="solar:calendar-outline" />}
                disabled={true}
              />
            </View>
            <View style={{ alignItems: "center", gap: 5, marginBottom: 20 }}>
              <Text style={{ marginTop: 10 }} category="s1">
                2. Tap on the Quick User Matching to quickly matched with a
                user.
              </Text>
              <MenuCard
                title="Quick User Matching"
                icon={
                  <Iconify size={40} icon="solar:users-group-rounded-linear" />
                }
                disabled={true}
              />
            </View>
            <Button
              onPress={() => {
                setShowTutorial(false);
              }}
            >
              Continue
            </Button>
          </Layout>
        </View>
      </Modal>
    </View>
  );
};
