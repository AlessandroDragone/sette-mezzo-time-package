//React functionalities
import React, { useState, useEffect } from "react";

//Native components
import {
    Image,
    View,
    ImageBackground,
    Platform,
    StyleSheet,
    Modal,
    Text,
    TouchableOpacity,
} from "react-native";

//Components
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

//API
import { postLobbyApi, putLobbyApi } from "../services/api/lobby/lobbyApi";
import { fetchData } from "../utils/fetchData";

//Media
import BackgroundPicture from "../assets/img/BG2.png";
import Logo from "../assets/img/newLogoWhite.png";
import { useNavigation } from "@react-navigation/native";

//Colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

const Home = (props) => {

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    let isDesktop = false;
    let lobbyID = 0;

    if (Platform.OS === "web") {
        isDesktop = true;
    }

    //Crea una nuova lobby
    const createLobby = async () => {
        let res = await fetchData(postLobbyApi);
        console.log(res)

        navigation.navigate('Lobby', { lobbyID: res?.data?.idLobby, users: res?.data?.users })
    }

    //Per joinare la lobby
    const joinLobby = async () => {

        if(lobbyID !== '' && lobbyID !== 0){
            let res = await fetchData(putLobbyApi, lobbyID);
            console.log(res)

            navigation.navigate('Lobby', { lobbyID: res?.data?.idLobby, users: res?.data?.users })
        }
    }

    const getLobbyId = (e) => {
        lobbyID = e;
    }

    const closeModal = () => {
        setModalVisible(!modalVisible);
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
                <CustomInput
                    callback={getLobbyId}
                    placeholder={"Lobby ID"}
                />

                <CustomButton
                    onClickCallback={joinLobby}
                    label={"ENTRA IN LOBBY"}
                    isDesktop={isDesktop}
                />

                <CustomButton
                    onClickCallback={createLobby}
                    label={"CREA LOBBY"}
                    isDesktop={isDesktop}
                />

                <CustomButton
                    onClickCallback={closeModal}
                    label={"TUTORIAL"}
                    isDesktop={isDesktop}
                />
            </View>

            <Modal
                animationType={'slide'}
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontWeight: 'bold' }}>REGOLE:</Text>
                        <Text style={styles.modalText}>
                            Sette e mezzo è un gioco di carte in cui bisogna cercare di avvicinarsi il più possibile al valore sette e mezzo evitando di superarlo, il giocatore con il valore più vicino vince la partita.
                        </Text>
                        <Text style={{ fontWeight: 'bold' }}>PESCA:</Text>
                        <Text style={styles.modalText}>Pesca una carta e aggiungila alla tua mano.</Text>
                        <Text style={{ fontWeight: 'bold' }}>PASSA:</Text>
                        <Text style={styles.modalText}>Finisci il turno con le carte che hai in mano e passa al giocatore successivo.</Text>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={{ fontWeight: 'bold', color: fifthColor }}>CHIUDI</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: secondaryColor,
        borderWidth: 5,
        borderColor: fifthColor,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'justify'
    },
});