import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import Store from "@/components/timers/ringtones/store";
import StopLecture from "./timers/ringtones/stop-lecture";

import ringtones from "@/assets/data/ringtones.json";

import Tone from "@/components/timers/ringtones/tone";

interface RingtoneListProps {
  selectedTone: string;
  onPress: (tone: string) => void;
}

const SeparatorComponent = () => {
  return (
    <View style={styles.separatorContainer}>
      <View style={{ width: 30 }} />
      <View style={styles.separator} />
    </View>
  );
};

const RingtoneList = ({ selectedTone, onPress }: RingtoneListProps) => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={<Store />}
        ListHeaderComponentStyle={{ marginVertical: 40 }}
        ListFooterComponent={<StopLecture name={"Stop Lecture"} />}
        ListFooterComponentStyle={{ marginTop: 40, marginBottom: 130 }}
        ItemSeparatorComponent={() => {
          return <SeparatorComponent />;
        }}
        showsVerticalScrollIndicator={true}
        data={ringtones}
        renderItem={({ item, index }) => {
          return (
            <Tone
              tone={item.tone}
              index={index}
              selected={selectedTone === item.tone}
              onPress={onPress}
            />
          );
        }}
        keyExtractor={(item) => item.tone}
        style={styles.container}
      />
    </View>
  );
};

export default RingtoneList;

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: "row",
    backgroundColor: "#2C2C2E",
    gap: 20,
  },
  separator: {
    flex: 1,
    borderBottomWidth: 0.65,
    borderColor: "white",
  },
});
