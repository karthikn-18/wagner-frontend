import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"

export const getTestimonialsApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/testimonial`);
    return response
}

export const editTestimonialsApi = async (data, id, token) => {
    console.log(data, id);
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/testimonial/${id}`, token, data);
    return response;
};

export const deleteTestimonialsApi = async (id, token) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/testimonial/${id}`, token);
    return response
}

export const addTestimonialsApi = async (data, token) => {
    const response = await senderRequest("post-photo", `${REACT_APP_BACKEND_URL}/create-testimonial`, token, data);
    return response
}
