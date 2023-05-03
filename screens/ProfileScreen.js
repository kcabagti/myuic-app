import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to ProfileScreen"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
  }
   