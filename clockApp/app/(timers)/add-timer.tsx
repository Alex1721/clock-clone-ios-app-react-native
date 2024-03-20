import {
  Pressable,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
} from "react-native";
import React from "react";

import Colors from "@/constants/Colors";

import Store from "@/components/timers/store";
import StopLecture from "@/components/timers/stop-lecture";

import { Ionicons } from "@expo/vector-icons";
import ringtones from "@/assets/data/ringtones.json";

interface ToneProps {
  tone: string;
  index: number;
  selected: boolean;
  onPress: (tone: string) => void;
}

const Tone = ({ tone, index, selected, onPress }: ToneProps) => {
  const backgroundColor = "grey";
  const backgroundColorPressed = "#220D0B";

  return (
    <Pressable
      onPress={onPress.bind(null, tone)}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? backgroundColorPressed : backgroundColor,
          borderTopRightRadius: index === 0 ? 10 : 0,
          borderTopLeftRadius: index === 0 ? 10 : 0,
          borderBottomEndRadius: index === ringtones.length - 1 ? 10 : 0,
          borderBottomStartRadius: index === ringtones.length - 1 ? 10 : 0,
        },
      ]}
    >
      {selected ? (
        <View style={{ width: 20 }}>
          <Ionicons name="checkmark" size={24} color="orange" />
        </View>
      ) : (
        <View style={{ width: 20 }} />
      )}
      <Text style={styles.text}>{tone}</Text>
    </Pressable>
  );
};

const SeparatorComponent = () => {
  return (
    <View style={styles.separatorContainer}>
      <View style={{ width: 30 }} />
      <View style={styles.separator} />
    </View>
  );
};

const AddTimer = () => {
  const [selectedTone, setSelectedTone] = React.useState<string | null>(null);

  const onPress = (tone: string) => {
    setSelectedTone(tone);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.grey }}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Store />}
          ListHeaderComponentStyle={{ marginVertical: 40 }}
          ListFooterComponent={<StopLecture name={"Stop Lecture"} />}
          ListFooterComponentStyle={{ marginVertical: 40 }}
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
        />
      </View>
    </SafeAreaView>
  );
};

export default AddTimer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    paddingLeft: 10,
    color: "orange",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    flex: 1,
    paddingVertical: 15,
    color: "white",
    height: "100%",
    fontSize: 18,
  },
  separatorContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "grey",
  },
  separator: {
    flex: 1,
    borderBottomWidth: 0.35,
    borderColor: "white",
  },
});
