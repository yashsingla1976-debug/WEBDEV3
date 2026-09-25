const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res, next) => {
    try {
        throw new Error("Something went wrong!!!!!!!!!!");
    } catch (error) {
        next(error);
    }
});

// ID route
app.get("/:id", (req, res, next) => {
    const id = req.params.id;

    try {
        if (id === "1234") {
            res.send("Valid id");
        } else {
            throw new Error("Invalid id");
        }
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message
    });
});

// 404 middleware
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Page not found"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});