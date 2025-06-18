import { Plus } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export const StoryAdd = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerItem}>
                <Plus color={"#fff"} />
            </View>
            <Text style={styles.text}>Novo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 80
    },
    containerItem: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#fff",
        textAlign: "center",
        marginTop: 3
    }
});