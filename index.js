import"dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js"
import userRoutes from "./routes/users.routes.js"

const app = express();

//esto se debe pponer antes de usar las rutas para que entienda json
app.use(express.json());

app.use(indexRoutes);
app.use(userRoutes);

const PORT = 5000;

app.listen(5000, console.log("http://localhost:" + PORT));