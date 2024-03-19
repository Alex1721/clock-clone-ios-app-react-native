import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import Colors from "@/constants/Colors";

import Store from "@/components/timers/store";
import Ringtone from "@/components/timers/ringtone";
import StopLecture from "@/components/timers/stop-lecture";

const AddTimer = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}
      >
        <Store />
        <Ringtone name={"Radar (per default)"} />
        <StopLecture name={"Stop lecture"} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
});
