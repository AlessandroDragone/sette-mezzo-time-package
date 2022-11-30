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
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";

//Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//API
import { registrationApi } from "../services/api/login/loginApi";
import { fetchData } from "../utils/fetchData";

//Components
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Utils
//import { getUsers } from "../utils/getUsers";

//Media
import BackgroundPicture from "../assets/img/ATBG1.png";
import Logo from "../assets/img/newLogoWhite.png";

//Colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

let User = {
    username: "",
    email: "",
    password: "",
};

let oldUsers;

const Register = (props) => {

    const navigation = useNavigation();

    let isDesktop = false;

    if (Platform.OS === "web") {
        isDesktop = true;
    }

    useEffect(() => {
        //setOldUsers();
        //console.log(oldUsers);
    }, []);

    const getValueUsername = (e) => {
        User.username = e;
    };
    
    const getValueEmail = (e) => {
        User.email = e;
    };

    const getValuePassword = (e) => {
        User.password = e;
    };

    const registration = async () => {
        let user = User;
        let res = await fetchData(registrationApi, user);
        console.log(res)

        navigation.navigate('Login')
    }

    const goToLogin = () => {
        navigation.navigate('Login')
    }

    /*const setOldUsers = async () => {
        oldUsers = await getUsers();
    };

    const navigateToGame = async () => {
        let newUsers = oldUsers;
        let find = false;
        console.log(newUsers);

        if (oldUsers.length === 0 || null) {
            newUsers.push(User);
        } else {
            oldUsers.forEach((element) => {
                if (element.email === User.email) {
                    find = !find;
                }
            });
            if (find !== true) {
                newUsers.push(User);
            }
        }

        if (Platform.OS === "web") {
            //salvo nella lista di tutti gli utenti
            localStorage.setItem("users", JSON.stringify(newUsers));
            //salvo l'utente attualmente loggato
            localStorage.setItem("currentUser", JSON.stringify(User));
        } else {
            try {
                const JSONnewUsers = JSON.stringify(newUsers);
                await AsyncStorage.setItem("@users", JSONnewUsers);
                //salvo l'utente corrente
                await AsyncStorage.setItem("@currentUser", JSON.stringify(User));
            } catch (e) {
                console.log(e);
            }
        }
        props.callback();
        localStorage.clear();
    };*/

    const log = () => {

    };

    return (
        <KeyboardAvoidingView>
            <View style={styles.mainView}>
                <ImageBackground
                    source={BackgroundPicture}
                    resizeMode={"cover"}
                    style={styles.ImageBackground}
                />
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "40%",
                        marginTop: "10%",
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
                        callback={getValueUsername}
                        placeholder={"Username"}
                    />

                    <CustomInput
                        callback={getValueEmail}
                        placeholder={"Email"}
                    />

                    <CustomInput
                        callback={getValuePassword}
                        placeholder={"Password"}
                        password={true}
                    />

                    <CustomButton
                        onClickCallback={registration}
                        label={"REGISTRATI"}
                        isDesktop={isDesktop}
                    />

                    <TouchableOpacity onPress={goToLogin}>
                        <Text
                            style={{ color: 'white' }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Register;

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
        height: "100%",
        marginTop: 20,
        marginBottom: 60,
    },
});