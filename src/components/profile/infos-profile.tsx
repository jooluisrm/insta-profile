import { StyleSheet, Text, View } from "react-native";
import { Numbers } from "./numbers";

export const InfosProfile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                João Luis Rodrigues
            </Text>
            <View style={styles.containerNumbers}>
                <Numbers num={0} title="posts"/>
                <Numbers num={479} title="seguidores"/>
                <Numbers num={324} title="seguindo"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    gap:5
    },
    name: {
        color: "#fff",
    },
    containerNumbers: {
        flexDirection: "row",
        gap: 40
        //justifyContent: "space-between"
    }
});