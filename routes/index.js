import express from "express";
// TODO: import router from users.route
import userRouter from "./user.routes";
import productsRouter from "./products.routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productsRouter);

router.get("/test", (req, res) => {
  res.send("working");
});

// TODO: use the imported router to handle all routes matching "/users"

export default router;
