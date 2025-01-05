import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"

export const getTestimonialsApi = async () => {
    const response = await senderRequest("GET", `${REACT_APP_BACKEND_URL}/testimonial`);
    return response
}

export const editTestimonialsApi = async (data, id) => {
    console.log(data, id);
    const response = await senderRequest("PUT", `${REACT_APP_BACKEND_URL}/testimonial/${id}`, undefined, data);
    return response;
};

export const deleteTestimonialsApi = async (id) => {
    const response = await senderRequest("DELETE", `${REACT_APP_BACKEND_URL}/testimonial/${id}`);
    return response
}

export const addTestimonialsApi = async (data) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/create-testimonial`, undefined, data);
    return response
}
