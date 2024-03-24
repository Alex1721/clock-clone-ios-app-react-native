import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";

const Ringtone = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <View style={styles.container}>
        <Text>Ringtone</Text>
      </View>
    </SafeAreaView>
  );
};

export default Ringtone;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
