import express from "express";
import { PORT } from "./config.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import router from "./routes/pages.js";
import authRouter from "./routes/auth.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "hbs");

console.log(__dirname);

//Rutas
app.use("/", router);
app.use("/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});