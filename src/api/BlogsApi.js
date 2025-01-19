import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"



export const getBlogsApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/blogs`);
    return response
}
export const getBlogsByIdApi = async (id) => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/blogs/${id}`);
    return response
}

export const editBlogsApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/blogs/${id}`, token, data);
    return response;
};

export const deleteBlogsApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/blogs/${id}`, token);
    return response
}

export const addBlogsApi = async (data, token) => {
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/create-blogs`, token, data);
    return response
}
