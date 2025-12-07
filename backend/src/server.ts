import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./mod/usuario/api/routes";
import ProgrammerProfileRoutes from "./mod/programador/api/routes";
import PortafolioRoutes from "./mod/portafolio/api/routes";
import ProyectRoutes from "./mod/proyecto/api/routes";
import AsesoriaRoutes from "./mod/asesoria/api/routes";
import CitasRouters from "./mod/citas/api/routes";
import { ApiResponse } from "./shared/ApiResponse";

dotenv.config();
const app = express();

app.use(cors({origin:[
  'https://proyecto-interciclo-3c1b8.web.app',
  'http://localhost:4200'
]}));
app.use(express.json());

// Rutas
app.use("/api/user", UserRoutes);
app.use("/api/programmerProfile", ProgrammerProfileRoutes);
app.use("/api/portafolio", PortafolioRoutes);
app.use("/api/proyect", ProyectRoutes);
app.use("/api/asesoria", AsesoriaRoutes);
app.use("/api/citas", CitasRouters);

app.use((req, res) => {
  return ApiResponse.error(res, {}, "Seccion no soportada");
});
// Puerto
const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
