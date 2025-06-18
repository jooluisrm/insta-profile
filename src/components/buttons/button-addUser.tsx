import { UserRoundPlus } from "lucide-react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ButtonAddUser = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>
              <UserRoundPlus color={"#fff"} size={15}/>
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#2b3036",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center"
  },
  text: {
    color: "#fff",
    textAlign: "center"
  },
});