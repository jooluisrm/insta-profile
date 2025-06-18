import { ChevronDown } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export const UserName = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.user}>jao.luisrm_</Text>
            <Text>
                <ChevronDown color="#fff" size={16}/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    user: {
        color: "#fff",
        fontSize: 20
    }
});