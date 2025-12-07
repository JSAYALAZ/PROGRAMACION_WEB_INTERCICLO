import { Router } from "express";
import { listProyects } from "../applications/listProyects";
import { ProyectCreateDTO } from "./dto/input";
import { createProyect } from "../applications/createProyect";
import { getProyectById } from "../applications/getProyectById";
import { ProyectoMapper } from "./mapper/proyecto_mapper";
import { ApiResponse } from "../../../shared/ApiResponse";
import { zodValidateJson } from "../../../shared/ZodValidator";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dates = await listProyects();
    const resp = dates.map((user) => {
      return ProyectoMapper.map(user);
    });
    return ApiResponse.success(res, "Correcto", resp);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, ProyectCreateDTO);
    const userId = await createProyect(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getProyectById(id);
    return ApiResponse.success(res, "Correcto", ProyectoMapper.map(data));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
