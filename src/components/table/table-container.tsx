import { ContactRound, Grid3X3, TvMinimalPlay } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import { IconTable } from "./icon-table";

export const TableContainer = () => {
    return (
        <View style={styles.container}>
            <IconTable active={true} type={1}/>
            <IconTable active={false} type={2}/>
            <IconTable active={false} type={3}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderBottomColor: "#18191f",
        borderBottomWidth: 1,
        marginTop: 30
    }
});