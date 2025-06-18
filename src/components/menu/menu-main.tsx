import { StyleSheet, View } from "react-native";
import { IconItem } from "./iconItem";
import { ProfileIcon } from "./profileIcon";

export const MenuMain = () => {
    return (
        <View style={styles.container}>
            <IconItem type="home"/>
            <IconItem type="search"/>
            <IconItem type="add"/>
            <IconItem type="reels"/>
            <ProfileIcon />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 60,
        borderTopColor: "#18191f",
        borderTopWidth: 1,
        marginBottom: 20
    }
});