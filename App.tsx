
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header } from './components/header/header';

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <Header />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        height: "100%",
        color: "#ffffff",
    },
    safeArea: {
        marginTop: StatusBar.currentHeight || 0,
        margin: 10
    }
});
