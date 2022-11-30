//React functionalities
import React, { useState, useEffect } from "react";

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

//Navigazione
import { useNavigation, useRoute } from "@react-navigation/native";

//Media
import BackgroundPicture from "../assets/img/BG3.png";
import Logo from "../assets/img/newLogoWhite.png";

//Colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Lobby = (props) => {

    const navigation = useNavigation();
    const route = useRoute();

    const [lobbyID, setLobbyID] = useState()
    const [users, setUsers] = useState()

    let isDesktop = false;

    if (Platform.OS === "web") {
        isDesktop = true;
    }

    useEffect(() => {
        if (route.params !== undefined) {
            console.log(route.params)
            let id = route.params.lobbyID;
            let users = route.params.users;
            setLobbyID(id)
            setUsers(users)
        }
    }, [])

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
                <Text style={styles.textWait}>LOBBY ID: {lobbyID}</Text>
            </View>

            <View style={styles.playersView}>
                {
                    users?.map((obj, key) => {
                        return (
                            <View style={styles.player} key={key}>
                                <Text>{obj.username}</Text>
                                <Text>PRONTO</Text>
                            </View>
                        )
                    })
                }
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