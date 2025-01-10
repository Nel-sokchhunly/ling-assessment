import { StyleSheet, TextProps, Text, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export default function Col({ children, style, ...props }: ViewProps) {
  return (
    <View style={[styles.col, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  col: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingVertical: 15,
  },
});
