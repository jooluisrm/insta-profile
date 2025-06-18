import { Image, StyleSheet, View } from "react-native";

export const Avatar = () => {
    return (
        <View>
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

    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100
    }
});