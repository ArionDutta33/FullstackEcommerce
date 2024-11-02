import express from "express";
import productRouter from "./routes/products/index.js";
import authRouter from "./routes/auth/index.js";
import serverless from "serverless-http";
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "dev") {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
}

export const handler = serverless(app);
