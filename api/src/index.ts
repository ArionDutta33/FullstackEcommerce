import express from "express";
import productRouter from "./routes/products/index";
import authRouter from "./routes/auth/index";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRouter);
app.use("/auth", authRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
