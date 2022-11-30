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
import { signinApi } from "../services/api/login/loginApi";
import { fetchData } from "../utils/fetchData";

//Components
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

//Utils
//import { getUsers } from "../utils/getUsers";

//Media
import BackgroundPicture from "../assets/img/ATBG1.png";
import Logo from "../assets/img/newLogoWhite.png";

//Navigation
import { useNavigation } from "@react-navigation/native";

//Colori
const brandColor = "#C40303";
const secondaryColor = "#7EBB64";
const tertiaryColor = "#688686";
const fourthColor = '#2D3E3E';
const fifthColor = '#445B3A';

let User = {
    password: "",
    email: "",
};

let oldUsers;

const Login = (props) => {

    const navigation = useNavigation();

    let isDesktop = false;

    if (Platform.OS === "web") {
        isDesktop = true;
    }

    const getValueEmail = (e) => {
        User.email = e;
    };

    const getValuePassword = (e) => {
        User.password = e;
    };

    const handleLogin = async () => {
        let user = User;
        let res = await fetchData(signinApi, user)
        console.log(res)

        await AsyncStorage.setItem("token", res?.data?.token);
        await AsyncStorage.setItem("refreshToken", res?.data?.refreshToken);

        await AsyncStorage.setItem("user", JSON.stringify(res?.data))
        await AsyncStorage.setItem("userLoggedIn", JSON.stringify(true));

        navigation.navigate('Home')
    }

    const goToRegister = () => {
        navigation.navigate('Register')
    }

    //   useEffect(() => {
    //     console.log(Platform);
    //     setOldUsers();
    //     console.log(oldUsers);
    //   }, []);

    //   const setOldUsers = async () => {
    //     oldUsers = await getUsers();
    //   };
    //   const navigateToGame = async () => {
    //     let newUsers = oldUsers;
    //     let find = false;
    //     console.log(newUsers);
    //     if (oldUsers.length === 0 || null) {
    //       newUsers.push(User);
    //     } else {
    //       oldUsers.forEach((element) => {
    //         if (element.email === User.email) {
    //           find = !find;
    //         }
    //       });
    //       if (find !== true) {
    //         newUsers.push(User);
    //       }
    //     }
    //     if (Platform.OS === "web") {
    //       // salvo nella lista di tutti gli utentu
    //       localStorage.setItem("users", JSON.stringify(newUsers));
    //       // salvo l'utente attualmente loggato
    //       localStorage.setItem("currentUser", JSON.stringify(User));
    //     } else {
    //       try {
    //         const JSONnewUsers = JSON.stringify(newUsers);
    //         await AsyncStorage.setItem("@users", JSONnewUsers);
    //         // salvo l'utente corrente
    //         await AsyncStorage.setItem("@currentUser", JSON.stringify(User));
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     }
    //     // props.callback();
    //     //localStorage.clear();
    //   };

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
                        width: "100%",
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
                        callback={getValueEmail}
                        placeholder={"Email"}
                    />

                    <CustomInput
                        callback={getValuePassword}
                        placeholder={"Password"}
                        password={true}
                    />

                    <CustomButton
                        onClickCallback={handleLogin}
                        label={"LOGIN"}
                        isDesktop={isDesktop}
                    />

                    <TouchableOpacity onPress={goToRegister}>
                        <Text
                            style={{ color: 'white' }}
                        >
                            Registrati
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

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