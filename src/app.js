const axios = require("axios");
const http = require("http");
const url = require("url");

require("dotenv").config(); // Load environment variables from .env file

const performCalculation = require("../utils/performCalculation.js");
const submitTask = require("../utils/submitTask.js");

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your specific origin in production
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        res.writeHead(200);
        res.end();
        return;
    }
    const parsedUrl = url.parse(req.url, true);

    // Define routes
    if (parsedUrl.pathname === "/calculation") {
    // I'vetry to use .env variables but seems that is not working well
        axios.get("https://interview.adpeai.com/api/v1/get-task")
            .then(response => {
                // Handling the response data
                const calculationResult = performCalculation(response.data);
                console.log("Result of the calculation:", calculationResult);

                // Submitting the task using the external function
                submitTask(response.data.id, calculationResult);

                // Send the result as JSON
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ result: calculationResult }));
            })
            .catch(error => {
                // Handling errors
                console.error("Error:", error.response.status, error.response.data);

                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Internal Server Error" }));
            });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

