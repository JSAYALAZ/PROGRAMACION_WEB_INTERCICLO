"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./mod/usuario/api/routes"));
const routes_2 = __importDefault(require("./mod/programador/api/routes"));
const routes_3 = __importDefault(require("./mod/portafolio/api/routes"));
const routes_4 = __importDefault(require("./mod/proyecto/api/routes"));
const routes_5 = __importDefault(require("./mod/asesoria/api/routes"));
const routes_6 = __importDefault(require("./mod/citas/api/routes"));
const ApiResponse_1 = require("./shared/ApiResponse");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use("/api/user", routes_1.default);
app.use("/api/programmerProfile", routes_2.default);
app.use("/api/portafolio", routes_3.default);
app.use("/api/proyect", routes_4.default);
app.use("/api/asesoria", routes_5.default);
app.use("/api/citas", routes_6.default);
app.use((req, res) => {
    return ApiResponse_1.ApiResponse.error(res, {}, "Seccion no soportada");
});
// Puerto
const PORT = 3000;
app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map