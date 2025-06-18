import { StyleSheet, Text, View } from "react-native";

export const BioMain = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ⬛🟨⬜
            </Text>
            <Text style={styles.text}>
                •IFNMG
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    text: {
        color: "#fff"
    }
});