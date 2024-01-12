const axios = require("axios");
const submitTask = require("../utils/submitTask.js");
require("dotenv").config(); 

jest.mock("axios");

describe("submitTask", () => {
    it("should submit the task successfully", async () => {
        const id = "a8ead1a4-203f-4611-a768-97efa3518f67";
        const result = 42;

        // Mocking the axios.post method to return a successful response
        axios.post.mockResolvedValue({ data: "Task submitted successfully" });

        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

        await submitTask(id, result);

        expect(axios.post).toHaveBeenCalledWith(
            process.env.API_GETTASK_URL || "https://interview.adpeai.com/api/v1/submit-task",
            { id: id, result: result }
        );

        expect(consoleLogMock).toHaveBeenCalledWith("Task submitted successfully:", "Task submitted successfully");

        consoleLogMock.mockRestore();
    });

    it("should handle errors during submission", async () => {
        const id = "a8ead1a4-203f-4611-a768-97efa3518f67";
        const result = 42;

        // Mocking the axios.post method to return an error
        const errorMessage = "Submission error";
        axios.post.mockRejectedValue(new Error(errorMessage));

        // Mocking console.error to prevent it from throwing an error in the test
        console.error = jest.fn();

        await submitTask(id, result);

        expect(axios.post).toHaveBeenCalledWith(
            process.env.API_GETTASK_URL || "https://interview.adpeai.com/api/v1/submit-task",
            { id: id, result: result }
        );
        expect(console.error).toHaveBeenCalledWith("Error submitting task:", errorMessage);
    });
});
