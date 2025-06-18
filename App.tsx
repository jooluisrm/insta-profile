
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header } from './src/components/header/header';
import { ProfileMain } from './src/components/profile/profile-main';
import { BioMain } from './src/components/bio/bio-main';
import { MusicMain } from './src/components/music/music-main';

export default function App() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <Header />
                <View style={styles.containerProfile}>
                    <ProfileMain />
                    <BioMain />
                    <MusicMain />
                </View>
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
    },
    containerProfile: {
        marginTop: 30
    }
});
