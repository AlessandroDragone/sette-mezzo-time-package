import { postApiNoAuth } from "../../genericServices";
import APIROUTES from "../apiRoutes";

//signin
export async function signinApi(obj) {
  return await postApiNoAuth(APIROUTES.SIGNIN, obj);
}

//registration
export async function registrationApi(obj) {
  return await postApiNoAuth(APIROUTES.REGISTRATION, obj);
}