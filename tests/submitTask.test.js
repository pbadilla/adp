// submitTask.test.js
const axios = require("axios");
const submitTask = require("../utils/submitTask.js");
require("dotenv").config(); // Load environment variables from .env file

jest.mock("axios");

describe("submitTask", () => {
    it("should submit the task successfully", async () => {
        const id = "a8ead1a4-203f-4611-a768-97efa3518f67";
        const result = 42;

        // Mocking the axios.post method to return a successful response
        axios.post.mockResolvedValue({ data: "Task submitted successfully" });

        // Performing the submitTask function
        await submitTask(id, result);

        // Expecting axios.post to have been called with the correct arguments
        expect(axios.post).toHaveBeenCalledWith(
            "https://interview.adpeai.com/api/v1/submit-task",
            { id: id, result: result }
        );

        // Expecting a console log indicating success
        expect(console.log).toHaveBeenCalledWith("Task submitted successfully:", "Task submitted successfully");
    });

    it("should handle errors during submission", async () => {
        const id = "a8ead1a4-203f-4611-a768-97efa3518f67";
        const result = 42;

        // Mocking the axios.post method to return an error
        axios.post.mockRejectedValue(new Error("Submission error"));

        // Performing the submitTask function
        await submitTask(id, result);

        // Expecting axios.post to have been called with the correct arguments
        expect(axios.post).toHaveBeenCalledWith(
            "https://interview.adpeai.com/api/v1/submit-task",
            { id: id, result: result }
        );

        // Expecting a console error indicating the error message
        expect(console.error).toHaveBeenCalledWith("Error submitting task:", "Submission error");
    });
});
