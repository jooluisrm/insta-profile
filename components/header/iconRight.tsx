import { Instagram, Menu, SquarePlus } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

export const IconRight = () => {
    return (
        <View style={styles.container}>
            <Text>
                <Instagram color={"#fff"}/>
            </Text>
            <Text>
                <SquarePlus color={"#fff"}/>
            </Text>
            <Text>
                <Menu color={"#fff"} size={28}/>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    }
});