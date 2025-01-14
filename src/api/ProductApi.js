import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"


export const getProductApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/product`);
    return response
}
export const getSingleProductApi = async (id) => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/product/${id}`);
    return response
}

export const editProductApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("PUT", `${REACT_APP_BACKEND_URL}/product/${id}`, token, data);
    return response;
};

export const deleteProductApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/product/${id}`, token);
    return response
}

export const addProductApi = async (data, token) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/create-product`, token, data);
    return response
}
