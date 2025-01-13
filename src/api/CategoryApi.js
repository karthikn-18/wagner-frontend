import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"

export const getCategoryApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/category`);
    return response
}

export const editCategoryApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("PUT", `${REACT_APP_BACKEND_URL}/category/${id}`, token, data);
    return response;
};

export const deleteCategoryApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/category/${id}`, token);
    return response
}

export const addCategoryApi = async (data, token) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/create-category`, token, data);
    return response
}
