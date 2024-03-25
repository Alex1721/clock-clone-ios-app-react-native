import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { Audio } from "expo-av";
import React, { useState, useEffect } from "react";

import Ringtone from "@/components/timers/ringtone";
import Button from "@/components/button";

const Timer = () => {
  const [playing, setPlaying] = useState(false);
  const [pause, setPause] = useState(true);
  const [showCountDown, setShowCountDown] = useState(false);

  const [time, setTime] = useState<Date>(new Date());
  const seconds = time.getHours() * 3600 + time.getMinutes() * 60;

  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const handleOnStart = () => {
    setShowCountDown(true);
    setPlaying(true);
  };
  const handleOnPause = () => {
    setPause(!pause);
  };
  const handleOnCancel = () => {
    setShowCountDown(false);
    setPlaying(false);
    setPause(true);
  };

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {showCountDown ? (
          <View style={styles.countdownCircle}>
            <CountdownCircleTimer
              isPlaying={pause}
              duration={seconds}
              colors={["#FFA500", "#FFA500"]}
              colorsTime={[7, 2]}
              size={350}
              onComplete={() => {
                playSound();
                setShowCountDown(false);
                setPlaying(false);
                setPause(true);
              }}
            >
              {({ remainingTime }) => {
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;
                return (
                  <Text
                    style={{ color: "white", fontSize: 70, fontWeight: "200" }}
                  >
                    {hours.toString().padStart(2, "0")}:
                    {minutes.toString().padStart(2, "0")}:
                    {seconds.toString().padStart(2, "0")}
                  </Text>
                );
              }}
            </CountdownCircleTimer>
          </View>
        ) : (
          <View style={styles.timePicker}>
            <DateTimePicker
              value={time}
              mode="countdown"
              display="spinner"
              onChange={(event, selectedDate) => {
                setTime(selectedDate as Date);
              }}
            />
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button
            name="Cancel"
            nameColor="#515153"
            backgroundColor="#1C1C1E"
            backgroundColorPressed="#161617"
            onPress={handleOnCancel}
          />
          {playing ? (
            <Button
              name="Pause"
              nameColor="#FFA500"
              backgroundColor="#342102"
              backgroundColorPressed="#241d11"
              onPress={handleOnPause}
            />
          ) : (
            <Button
              name="Start"
              nameColor="#4CC966"
              backgroundColor="#0B2B11"
              backgroundColorPressed="#17261a"
              onPress={handleOnStart}
            />
          )}
        </View>
        <Ringtone />
      </View>
    </SafeAreaView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 20,
  },
  timePicker: {
    position: "absolute",
    top: 60,
    left: 20,
    right: 20,
  },
  countdownCircle: {
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
  },
  buttonContainer: {
    marginTop: 125,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
