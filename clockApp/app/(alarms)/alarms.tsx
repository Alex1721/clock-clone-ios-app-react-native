import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Alarm from "@/components/alarms/alarm";

const Alarms = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Alarm time="7:30" description="School Time!, every weekday" />
        <Alarm time="8:00" description="Work Time!, every weekday" />
      </View>
    </SafeAreaView>
  );
};

export default Alarms;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
