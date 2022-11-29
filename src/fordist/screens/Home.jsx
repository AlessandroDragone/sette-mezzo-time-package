//React functionalities
import React, { useEffect } from "react";

//Native components
import {
    Image,
    View,
    ImageBackground,
    Platform,
    StyleSheet,
} from "react-native";

//Components
import CustomButton from "../components/CustomButton";

// media
import BackgroundPicture from "../assets/img/BG2.png";
import Logo from "../assets/img/newLogoWhite.png";

// colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Home = (props) => {

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
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <CustomButton
                    onClickCallback={log}
                    label={"ENTRA IN LOBBY"}
                    isDesktop={isDesktop}
                />

                <CustomButton
                    onClickCallback={log}
                    label={"CREA LOBBY"}
                    isDesktop={isDesktop}
                />

                <CustomButton
                    onClickCallback={log}
                    label={"IMPOSTAZIONI"}
                    isDesktop={isDesktop}
                />
            </View>
        </View>
    );
};

export default Home;

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
});