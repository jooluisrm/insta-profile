import { House, Search, SquarePlus, TvMinimalPlay } from "lucide-react-native";
import { StyleSheet, View } from "react-native";

type Props = {
    type: "home" | "search" | "add" | "reels";
}

export const IconItem = ({ type }: Props) => {
    return (
        <View>
            {type === "home" && <House color={"#fff"} size={28} />}
            {type === "search" && <Search color={"#fff"} size={28} />}
            {type === "add" && <SquarePlus color={"#fff"} size={28} />}
            {type === "reels" && <TvMinimalPlay color={"#fff"} size={28} />}
        </View>
    );
}

