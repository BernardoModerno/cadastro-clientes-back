import express from "express";
import UsersRouter from "./users";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("OK");
});

router.use(UsersRouter);

export default router;