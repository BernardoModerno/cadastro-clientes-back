import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("OK");
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})