import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { AvailibilityCreateDTO } from "./dto/input";
import { listDisponibilidad } from "../applications/listDisponibilidad";
import { ApiResponse } from "src/shared/ApiResponse";
import { getDisponibilidadById } from "../applications/getDisponibilidadById";
import { createDisponibilidad } from "../applications/createDisponibilidad";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const user = await listDisponibilidad();
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, AvailibilityCreateDTO);
    const userId = await createDisponibilidad(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getDisponibilidadById(id);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
