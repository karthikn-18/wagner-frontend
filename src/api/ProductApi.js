import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"


export const getProductApi = async (page, search, categoryId, industriesIds, applicationsIds, admin) => {

    const params = new URLSearchParams();

    if (page) params.append("page", page);
    if (search) params.append("search", search);
    if (categoryId) params.append("categoryId", categoryId);
    if (industriesIds) params.append("industriesIds", industriesIds);
    if (applicationsIds) params.append("applicationsIds", applicationsIds);
    if (admin) params.append("admin", admin)
    params.append("limit", 8);

    const url = `${REACT_APP_BACKEND_URL}/product?${params.toString()}`;
    const response = await senderRequest("GET", url);
    return response;
}


export const getSingleProductApi = async (id) => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/product/${id}`);
    return response
}

export const editProductApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/product/${id}`, token, data);
    return response;
};

export const deleteProductApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/product/${id}`, token);
    return response
}

export const addProductApi = async (data, token) => {
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/create-product`, token, data);
    return response
}


export const getBestSellersApi = async (data, token) => {
    const response = await senderRequest("get", `${REACT_APP_BACKEND_URL}/product-bestSellers`, token, data);
    return response
}
