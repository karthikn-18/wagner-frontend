import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"
// import { useUserStore } from "../store";

// const token = useUserStore(state => state?.login)
// console.log(token, "token");

export const getApplicationApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/applications`);
    return response
}

export const editApplicationApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/application/${id}`, token, data);
    return response;
};

export const deleteApplicationApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/application/${id}`, token);
    return response
}

export const addApplicationApi = async (data, token) => {
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/create-application`, token, data);
    return response
}
