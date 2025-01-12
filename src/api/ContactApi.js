import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http";
import { Userlogin } from "../store";

const token = Userlogin.getState().login

export const sendContactApi = async (data) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/contact`, undefined, data);
    return response
}
export const getContactApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/contact`, token);
    return response
}