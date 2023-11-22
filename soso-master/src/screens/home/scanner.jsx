import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import { BarCodeScanner } from "expo-barcode-scanner";
import { BackAction } from "../../components/backAction";

const Scanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Ticket has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 5,
        }}
      >
        <BackAction navigation={navigation} />
        <Text category="h3" status="primary">
          Scan Ticket
        </Text>
      </View>
      <View style={styles.scanner}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <View style={styles.options}>
            <Pressable
              style={[styles.pressable, styles.center2FlexBox]}
              onPress={() => setScanned(false)}
            >
              <Text category="s1" status="control">
                Rescan
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  backArrow: {
    marginRight: 20,
    marginTop: 5,
  },
  scanner: {
    height: "100%",
  },
  pressable: {
    width: 200,
    height: 40,
    backgroundColor: "#775987",
    paddingVertical: 0,
    justifyContent: "center",
    borderRadius: 15,
  },
  options: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  center2FlexBox: {
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
  },
});
