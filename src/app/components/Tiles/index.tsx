import React from "react";
import { ScrollView } from "react-native";

import Tile from "../Tile";

export default function Tiles() {
  return (
    <ScrollView
        style={{display: "flex", marginBottom: 25 }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
    >
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />

    </ScrollView>

  );
}