import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"


export const getIndustryApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/industry`);
    return response
}

export const editIndustryApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("PUT", `${REACT_APP_BACKEND_URL}/industry/${id}`, token, data);
    return response;
};

export const deleteIndustryApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/industry/${id}`, token);
    return response
}

export const addIndustryApi = async (data, token) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/create-industry`, token, data);
    return response
}
