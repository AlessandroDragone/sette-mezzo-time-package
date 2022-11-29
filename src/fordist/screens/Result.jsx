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
import BackgroundPicture from "../assets/img/BG4.png";
import Logo from "../assets/img/newLogoWhite.png";

// colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Result = (props) => {

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
                    height: '10%',
                    marginVertical: 30
                }}
            >
                <Image source={Logo} style={styles.LogoImage} resizeMode={"contain"} />
            </View>

            <View style={styles.playersView}>

                <Text style={styles.textResult}>HAI VINTO!</Text>

                <View style={styles.player}>
                    <Text>PLAYER 1</Text>
                    <Text>1</Text>
                </View>

                <View style={styles.player}>
                    <Text>PLAYER 2</Text>
                    <Text>0</Text>
                </View>

                <View style={styles.player}>
                    <Text>PLAYER 3</Text>
                    <Text>0</Text>
                </View>

                <View style={styles.player}>
                    <Text>PLAYER 4</Text>
                    <Text>0</Text>
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
                    label={"GIOCA ANCORA"}
                    isDesktop={isDesktop}
                    container={styles.buttonContainer}
                />

                <CustomButton
                    onClickCallback={log}
                    label={"TORNA ALLA LOBBY"}
                    isDesktop={isDesktop}
                    container={styles.buttonContainer}
                />
            </View>
        </View>
    );
};

export default Result;

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
        top: 0,
        right: 20,
    },
    playersView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 295,
        height: '50%',
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
    textResult: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginBottom: 0,
    },
});