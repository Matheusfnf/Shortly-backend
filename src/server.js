import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/usersRoutes.js";
import urlsRoutes from "./routes/urlsRouter.js";
import tokenRoutes from "./routes/tokenRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.use(urlsRoutes);
app.use("/signin", tokenRoutes);

app.listen(process.env.PORT, () => {
  console.log("Running on port " + process.env.PORT);
});
