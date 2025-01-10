import { View, ViewProps, StyleSheet } from "react-native";

export default function TRow({
  children,
  style,
  isLastRow,
  ...props
}: ViewProps & {
  isLastRow?: boolean;
}) {
  return (
    <View
      style={[
        styles.row,
        style,
        !isLastRow && {
          borderColor: "#E5E5E5",
          borderBottomWidth: 1,
        },
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },
});
