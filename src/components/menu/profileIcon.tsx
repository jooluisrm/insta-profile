import { Image, StyleSheet, View } from "react-native";

export const ProfileIcon = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require("../../../assets/joao.jpg")}
                style={styles.img}
                resizeMode="cover"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 100
    },
    img: {
        borderRadius: 100,
        width: 30,
        height: 30
    }
});