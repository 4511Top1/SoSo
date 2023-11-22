import { Text, useStyleSheet, useTheme } from "@ui-kitten/components";
import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Iconify } from "react-native-iconify";
import Modal from "react-native-modal";
import { default as s } from "./ModalStyle";

const QRCode = ({
  navigation,
  destination,
  showModal,
  setShowModal,
  toggleModal,
}) => {
  const theme = useTheme();
  const styles = useStyleSheet(s);

  return (
    <View style={styles.modalView}>
      <Modal
        isVisible={showModal}
        style={styles.modal}
        onBackdropPress={toggleModal}
      >
        <View style={styles.modalContent}>
          <Text category="h4" status="primary">
            Whale Watching
          </Text>
          <Image
            style={styles.qrCode}
            resizeMode="contain"
            source={require("../assets/images/QR.png")}
          />
          <View style={styles.details}>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:clock-20-regular"}
              />
              <Text category="p1">11:00 AM</Text>
            </View>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:calendar-20-regular"}
              />
              <Text category="p1">Wednesday, 28 oct 202</Text>
            </View>
            <View style={[styles.label, styles.labelFlexBox]}>
              <Iconify
                color={theme["color-primary-500"]}
                size={27}
                icon={"fluent:location-20-regular"}
              />
              <Text category="p1">SEA LIFE Sydney Aquarium</Text>
            </View>
            <View style={styles.ticketButton}>
              <TouchableOpacity
                style={[styles.pressable, styles.center2FlexBox]}
                onClick={() => {}}
              >
                <Text category="s1" status="control">
                  View Event
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QRCode;
