import"dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js"
import userRoutes from "./routes/users.routes.js"

const app = express();

app.use(indexRoutes);
app.use(userRoutes);

const PORT = 5000;

app.listen(5000, console.log("http://localhost:" + PORT));