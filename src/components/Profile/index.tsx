import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./style";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://avatars.githubusercontent.com/u/13459324" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greet}>Olá,</Text>
          <Text style={styles.username}>Welder</Text>
        </View>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}
