//React functionalities
import React, { useEffect } from "react";

//Native components
import {
    Image,
    View,
    Text,
    ImageBackground,
    Platform,
    StyleSheet,
} from "react-native";

//Components
import CustomButton from "../components/CustomButton";

// media
import BackgroundPicture from "../assets/img/BG3.png";
import Logo from "../assets/img/newLogoWhite.png";

// colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Lobby = (props) => {

    let isDesktop = false;

    if (Platform.OS === "web") {
        isDesktop = true;
    }

    const log = () => {

    };

    return (
        <View style={styles.mainView}>
            <ImageBackground
                source={BackgroundPicture}
                resizeMode={"cover"}
                style={styles.ImageBackground}
            />

            <View
                style={{
                    height: '20%',
                    marginVertical: 30
                }}
            >
                <Image source={Logo} style={styles.LogoImage} resizeMode={"contain"} />
            </View>

            <View style={styles.waitView}>
                <Text style={styles.textWait}>ATTESA GIOCATORI</Text>
            </View>

            <View style={styles.playersView}>
                <View style={styles.player}>
                    <Text>PLAYER 1</Text>
                    <Text>PRONTO</Text>
                </View>
                <View style={styles.player}>
                    <Text>PLAYER 2</Text>
                    <Text>PRONTO</Text>
                </View>
                <View style={styles.player}>
                    <Text>PLAYER 3</Text>
                    <Text>PRONTO</Text>
                </View>
                <View style={styles.player}>
                    <Text>PLAYER 4</Text>
                    <Text>PRONTO</Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <CustomButton
                    onClickCallback={log}
                    label={"START"}
                    isDesktop={isDesktop}
                />
            </View>
        </View>
    );
};

export default Lobby;

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    ImageBackground: {
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    LogoImage: {
        width: 200,
        height: "100%",
        position: "absolute",
        top: 10,
        right: -20,
    },
    playersView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 295,
        height: '45%',
        borderRadius: 30,
        backgroundColor: tertiaryColor,
        opacity: 0.7,
    },
    player: {
        backgroundColor: secondaryColor,
        borderRadius: 5,
        width: '80%',
        height: '15%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    waitView: {
        backgroundColor: tertiaryColor,
        borderWidth: 5,
        borderRadius: 50,
        borderColor: fourthColor,
        height: '7%',
        marginBottom: 10,
        justifyContent: 'center',
    },
    textWait: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: '10%',
    },
});