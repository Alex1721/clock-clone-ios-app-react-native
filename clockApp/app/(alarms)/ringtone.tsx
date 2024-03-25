import { View, SafeAreaView, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";

import RingToneList from "@/components/ringtone-list";

const Ringtone = () => {
  const [selectedTone, setSelectedTone] = React.useState("Radar (per default)");
  const handleOnPress = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <RingToneList selectedTone={selectedTone} onPress={handleOnPress} />
    </SafeAreaView>
  );
};

export default Ringtone;

const styles = StyleSheet.create({});
