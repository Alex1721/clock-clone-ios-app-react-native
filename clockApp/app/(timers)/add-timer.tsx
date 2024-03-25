import { View, Text, Pressable } from "react-native";
import { Audio } from "expo-av";
import { Stack, Link, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

import Colors from "@/constants/Colors";

import RingtoneList from "@/components/ringtone-list";

interface HeaderRightProps {
  param: string;
}

const HeaderRight = ({ param }: HeaderRightProps) => {
  return (
    <Link
      href={{
        pathname: "/timer",
        params: { name: param },
      }}
      asChild
    >
      <Pressable>
        <Text style={{ color: "orange", fontSize: 20 }}>Confirm</Text>
      </Pressable>
    </Link>
  );
};

const AddTimer = () => {
  const params = useLocalSearchParams();
  const name = params.name;

  const [selectedTone, setSelectedTone] = useState("Radar (per default)");

  const [sound, setSound] = useState<Audio.Sound | null>();

  useEffect(() => {
    if (name) {
      setSelectedTone(name as string);
    }
  }, [name]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/timer.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onPress = (tone: string) => {
    setSelectedTone(tone);
    playSound();
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.grey }}>
      <Stack.Screen
        options={{ headerRight: () => <HeaderRight param={selectedTone} /> }}
      />
      <RingtoneList selectedTone={selectedTone} onPress={onPress} />
    </View>
  );
};

export default AddTimer;
