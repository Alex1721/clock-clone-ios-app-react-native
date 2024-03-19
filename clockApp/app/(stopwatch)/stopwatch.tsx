import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState, useRef, useEffect } from "react";

import Timer from "@/components/stopwatch/timer";
import Lap from "@/components/stopwatch/lap";
import Button from "@/components/stopwatch/button";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 40, color: "white" }}>
            {("0" + ((time / 10) % 100)).slice(-2)}
          </Text>
        </View>
        <Button type="start" onPress={handleStart} />
        <Button type="stop" onPress={handlePauseResume} />
        <Button type="reset" onPress={handleReset} />
      </View>
    </SafeAreaView>
  );
};

export default StopWatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
