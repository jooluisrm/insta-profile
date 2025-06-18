import { Plus } from "lucide-react-native";
import { Image, StyleSheet, Text, View } from "react-native";

export const Avatar = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../assets/joao.jpg")}
                style={styles.img}
                resizeMode="cover"
            />
            <Text style={styles.addStory}>
                <Plus color={"#000"} />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    addStory: {
        backgroundColor: "#fff",
        width: 20,
        height: 20,
        borderRadius: 100,
        padding: 2,
        borderWidth: 2,           
        borderColor: "#000",      
        borderStyle: "solid",
        position: "absolute",
        bottom: 0,
        right: 0
    }
});