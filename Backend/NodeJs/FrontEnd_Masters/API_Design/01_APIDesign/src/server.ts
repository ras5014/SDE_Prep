import express from "express";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Client can send JSON data
app.use(morgan("dev"));

// app.use(protect);
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// Routers
import productRouter from "./routers/product.router";
import userRouter from "./routers/user.router";

app.use("/api/v1/product", protect, productRouter);
app.use("/api/v1", userRouter);

// Custom Error Hanlding
app.use((err, req, res, next) => {
  if (err.type === "signin") {
    return res.status(401).json({ error: "Signin Error" });
  } else if (err.type === "signup") {
    return res.status(400).json({ error: "Signup Error" });
  } else {
    res.status(500).json({ error: "Something Broke" });
  }
});

const PORT = 8080;
const server = async () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
