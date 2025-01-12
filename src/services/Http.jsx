import axios from "axios";
import { REACT_APP_BACKEND_URL, REACT_APP_BASE_URL } from "../env/env";

const handleResponse = (response) => {
  console.log(response, "response12344");
  if (response.status === 200 || response.status === 201) {
    return response; // Return the response data
  } else {
    return [];
  }
};

const handleError = (error) => {
  if (error?.response) {
    // Handle errors with a response from the server
    console.error("Error Response:", error.response);
    return {
      success: false,
      status: error.response.status,
      data: error.response.data || "Something went wrong",
    };
  } else if (error?.request) {
    // Handle errors with no response (e.g., network issues)
    console.error("Error Request:", error.request);
    return {
      success: false,
      status: null,
      data: "No response received. Please check your network connection.",
    };
  } else {
    // Handle other errors
    console.error("Error Message:", error.message);
    return {
      success: false,
      status: null,
      data: error.message || "An unknown error occurred",
    };
  }
};

const senderRequest = async (
  method,
  apiUrl,
  token ,
  body = {}
) => {
  try {
    let response;
    console.log(apiUrl, "apiUrl",token);
    switch (method.toLowerCase()) {
      case "get":
        response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 60 },
        });
        break;
      case "post":
        response = await axios.post(apiUrl, body, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          next: { revalidate: 60 },
        });
        break;
      case "put":
        response = await axios.put(apiUrl, body, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        break;
      case "delete":
        response = await axios.delete(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        break;
      case "patch":
        response = await axios.patch(apiUrl, body, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        break;
      default:
        throw new Error("Method not allowed");
    }
    return handleResponse(response);
  } catch (error) {
    console.log(error, "error");
    return handleError(error); // Return the error response to the client
  }
};

export default senderRequest;
