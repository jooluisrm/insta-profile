import { CirclePlay } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export const MusicMain = () => {
    return (
        <View style={styles.container}>
            <CirclePlay color={"#fff"} size={17}/>
            <Text style={styles.music}>Creep</Text>
            <Text style={styles.banda}>• Radiohead</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    music: {
        color: "#fff",
    },
    banda: {
        color: "#999"
    },
    container: {
        flexDirection: "row",
        gap: 5,
        alignItems: 'center',
        marginTop: 10
    }
});