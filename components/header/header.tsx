import { StyleSheet, View } from "react-native";
import { UserName } from "./userName";
import { IconRight } from "./iconRight";

export const Header = () => {
    return (
        <View style={styles.container}>
            <UserName />
            <IconRight />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});