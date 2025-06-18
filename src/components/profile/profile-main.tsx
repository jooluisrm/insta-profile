import { StyleSheet, View } from "react-native";
import { Avatar } from "./avatar";
import { InfosProfile } from "./infos-profile";

export const ProfileMain = () => {
    return (
        <View style={styles.container}>
            <Avatar />
            <InfosProfile />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
});