import "dotenv/config";
import express from "express"; //libreria que facilita la creación de servidores web
import morgan from "morgan";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js"
import userRoutes from "./routes/users.routes.js"

//crear el servidor
const app = express();

//esto se debe pponer antes de usar las rutas para que la app entienda json (javascript object notation)
app.use(express.json());
app.use(morgan("dev"));  //morgan y cors ayudan a tener acceso a otros puertos o URL's creo
app.use(cors()); //complete access

app.use(indexRoutes);
app.use(userRoutes);

const PORT = 5000;

app.listen(5000, console.log("http://localhost:" + PORT));