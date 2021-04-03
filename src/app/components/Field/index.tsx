import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

interface FieldData {
  label: string,
  render(props: any): React.ReactNode
}

const Field: React.FC<FieldData> = ({label, render}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.label}>{label}</Text>
      {render(
        {style: styles.field}
      )}
    </View>
  );
}

export default Field;