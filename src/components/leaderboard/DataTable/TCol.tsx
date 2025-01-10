import { StyleSheet, TextProps, Text } from "react-native";

export default function Col({ children, style, ...props }: TextProps) {
  return (
    <Text style={[styles.col, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  col: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: "500",
  },
});
