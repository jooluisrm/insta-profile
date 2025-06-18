import { StyleSheet, Text, View } from "react-native";

type Props = {
    num: number;
    title: string;
}

export const Numbers = ({num,  title}: Props) => {
    return (
        <View>
            <Text style={styles.textNum}>{num}</Text>
            <Text style={styles.textTitle}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textNum: {
        color: "#fff"
    },
    textTitle: {
        color: "#fff"
    }
});