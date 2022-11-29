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
import Retro from "../assets/img/RetroCard.png";

// colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Play = (props) => {

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

            <View style={styles.table}>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <View style={styles.playerHand}>
                        <Text>PLAYER 1</Text>
                        <View style={styles.cardView}>
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                        </View>
                    </View>

                    <View>
                        <CustomButton
                            onClickCallback={log}
                            label={"PASSA"}
                            isDesktop={isDesktop}
                            container={styles.buttonContainer}
                        />

                        <CustomButton
                            onClickCallback={log}
                            label={"PESCA"}
                            isDesktop={isDesktop}
                            container={styles.buttonContainer}
                        />
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '55%',
                    }}
                >
                    <View style={styles.playerHandMiddle}>
                        <Text>PLAYER 3</Text>
                        <View style={[styles.cardView, { transform: [{ rotate: "90deg" }] }]}>
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                        </View>
                    </View>

                    <View>
                        <Image
                            source={Retro}
                            style={styles.cardImage}
                            resizeMode={"contain"}
                        />
                    </View>

                    <View style={styles.playerHandMiddle}>
                        <View style={[styles.cardView, { transform: [{ rotate: "-90deg" }] }]}>
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                        </View>
                        <Text>PLAYER 2</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        height: 150
                    }}
                >
                    <View style={styles.playerHand}>
                        <Text>PLAYER 4</Text>
                        <View style={styles.cardView}>
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                            <Image
                                source={Retro}
                                style={styles.cardImage}
                                resizeMode={"contain"}
                            />
                        </View>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default Play;

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
    table: {
        backgroundColor: secondaryColor,
        opacity: 0.7,
        width: "100%",
        height: "80%",
        borderRadius: 30,
        flexDirection: 'column-reverse'
    },
    playerHand: {
        backgroundColor: tertiaryColor,
        width: "70%",
        height: "100%",
        borderRadius: 20,
    },
    playerHandMiddle: {
        backgroundColor: tertiaryColor,
        width: "35%",
        height: "70%",
        borderRadius: 20,
    },
    cardView: {
        flex: 1,
        flexDirection: 'row',
    },
    cardImage: {
        width: 70,
        height: '100%'
    },
    buttonContainer: {
        width: 100,
        height: 50,
        marginVertical: 10,
    },
});