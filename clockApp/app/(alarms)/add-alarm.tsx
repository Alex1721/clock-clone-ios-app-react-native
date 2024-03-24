import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";

import NewAlarm from "@/components/alarms/new-alarm/new-alarm";

const AddAlarm = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <View style={styles.container}>
        <NewAlarm />
      </View>
    </SafeAreaView>
  );
};

export default AddAlarm;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});
