import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"
import { Userlogin } from "../store";

const token = Userlogin.getState().login
console.log(token, "token");

export const getBlogsApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/blogs`);
    return response
}

export const editBlogsApi = async (data, id) => {
    console.log(data, id);
    const response = await senderRequest("PUT", `${REACT_APP_BACKEND_URL}/blogs/${id}`, token, data);
    return response;
};

export const deleteBlogsApi = async (id) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/blogs/${id}`, token);
    return response
}

export const addBlogsApi = async (data) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/create-blogs`, token, data);
    return response
}
