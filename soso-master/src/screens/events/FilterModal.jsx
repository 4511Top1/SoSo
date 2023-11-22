import { Button } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

const FilterModal = ({ isModalVisible, toggleModal }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  return (
    <Modal
      isVisible={isModalVisible}
      style={styles.modal}
      onBackdropPress={toggleModal}
    >
      <View style={styles.modalContent}>
        <Button onPress={toggleModal}>Hide modal</Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  input: {
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 2,
    flexGrow: 1,
  },
});

export default FilterModal;
