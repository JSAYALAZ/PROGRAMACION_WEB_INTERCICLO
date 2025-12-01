import { Router } from "express";
import { listProyects } from "../applications/listProyects";
import { ApiResponse } from "src/shared/ApiResponse";
import { zodValidateJson } from "src/shared/ZodValidator";
import { ProyectCreateDTO } from "./dto/input";
import { createProyect } from "../applications/createProyect";
import { getProyectById } from "../applications/getProyectById";

const router = Router();

router.get("/", async (req, res) => {
   try {
    const user = await listProyects();
    return ApiResponse.success(res, "Correcto", user);
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
    const user = await getProyectById(id);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
