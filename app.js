const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        app: "DevOps Practice App",
        version: "1.0.0",
        message: "Application is running"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        status: "running",
        environment: process.env.NODE_ENV || "development"
    });
});

module.exports = app;