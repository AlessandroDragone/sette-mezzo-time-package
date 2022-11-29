import { postApiNoAuth } from "../../genericServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function updateAuthTokenApi() {
  return await postApiNoAuth("updateAuthToken", {
    refreshToken: await AsyncStorage.getItem("refreshToken"),
  });
}
