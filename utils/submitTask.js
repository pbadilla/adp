// submitTask.js
const axios = require("axios");
require("dotenv").config(); // Load environment variables from .env file

async function submitTask(id, result) {
    const submitUrl = process.env.API_GETTASK_URL || "https://interview.adpeai.com/api/v1/submit-task";

    const requestBody = {
        id: id,
        result: result,
    };

    try {
        const response = await axios.post(submitUrl, requestBody);
        console.log("Task submitted successfully:", response.data);
    } catch (error) {
        console.error("Error submitting task:", error.message);
  
        if (error.response) {
            // The request was made, but the server responded with an error status code
            console.error("Server responded with error status:", error.response.status);
            console.error("Response data:", error.response.data);
        } else if (error.request) {
            // The request was made, but no response was received
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an error
            console.error("Error setting up the request:", error.message);
        }
    }
  
}

module.exports = submitTask;
