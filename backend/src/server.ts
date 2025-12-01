import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import UserRoutes from "./mod/usuario/api/routes"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/user",UserRoutes );


// Puerto
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
