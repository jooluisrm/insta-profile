import { StyleSheet, Text, View } from "react-native";

export const FeedMain = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                Capture o momento com um amigo
            </Text>
            <Text style={styles.h3}>Crie seu primeiro post</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
        gap: 10
    },
    h1: {
        color: "#fff",
        textAlign: "center",
        fontSize: 28,
        flexWrap: "wrap",
        width: 300
    },
    h3: {
        color: "#1155ff",
        textAlign: "center",
        fontSize: 18,
    }
});