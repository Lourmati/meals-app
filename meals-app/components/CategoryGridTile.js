import React from "react";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { shadowColor: color, borderWidth: 0.5, borderColor: color }]}>
      <Pressable
        android_ripple={{ color: color }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 20,
    backgroundColor: "#ffffffea",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    // IOS
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
