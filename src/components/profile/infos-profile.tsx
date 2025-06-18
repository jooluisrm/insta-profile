import { StyleSheet, Text, View } from "react-native";

export const InfosProfile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                João Luis Rodrigues
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    name: {
        color: "#fff",
    }
});