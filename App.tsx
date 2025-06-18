
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header } from './src/components/header/header';
import { ProfileMain } from './src/components/profile/profile-main';
import { BioMain } from './src/components/bio/bio-main';
import { MusicMain } from './src/components/music/music-main';
import { Buttons } from './src/components/buttons/buttons';
import { ButtonAddUser } from './src/components/buttons/button-addUser';
import { StoryContainer } from './src/components/story/story-container';
import { TableContainer } from './src/components/table/table-container';
import { FeedMain } from './src/components/feed/feed-main';

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
                <View style={styles.containerButtons}>
                    <Buttons text='Editar perfil'/>
                    <Buttons text='Compartilhar perfil'/>
                    <ButtonAddUser />
                </View>
                <StoryContainer />
                <TableContainer />
                <FeedMain />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0c0f14",
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
    },
    containerButtons: {
        flexDirection: "row",
        gap: 5,
        marginTop: 20,
        marginBottom: 20,
    }
});
