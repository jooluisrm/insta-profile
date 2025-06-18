import { ContactRound, Grid3X3, TvMinimalPlay } from "lucide-react-native";
import { StyleSheet, Text } from "react-native";

type Props = {
    active: boolean;
    type: 1 | 2 | 3;
};

export const IconTable = ({ active, type }: Props) => {
    return (
        <Text
            style={[
                styles.icon,
                active && styles.activeBorder // aplica a borda só se active for true
            ]}
        >
            {type === 1 && <Grid3X3 color={"#fff"} />}
            {type === 2 && <TvMinimalPlay color={"#fff"} />}
            {type === 3 && <ContactRound color={"#fff"} />}
        </Text>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 60,
        textAlign: "center",
    },
    activeBorder: {
        borderBottomWidth: 2,
        borderBottomColor: "#fff",
    }
});
