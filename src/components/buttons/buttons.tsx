import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  text: string;
}

export const Buttons = ({text}: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 40,
    backgroundColor: "#2b3036",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});
