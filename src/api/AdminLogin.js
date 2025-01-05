import { REACT_APP_BACKEND_URL } from "../env/env";
import senderRequest from "../services/Http"

export const AdminLogin = async ({ email, password }) => {
    const response = await senderRequest("POST", `${REACT_APP_BACKEND_URL}/admin/login`, { email, password });
    return response
}