import { Router } from "express";
import { listAsesorias } from "../applications/listAsesorias";
import { AsesoriaCreateDTO, AsesoriaUpdateDTO } from "./dto/input";
import { createAsesory } from "../applications/createAsesory";
import { getAsesoriaById } from "../applications/getAsesoriaById";
import { updateAsesoria } from "../applications/updateAsesoria";
import { ApiResponse } from "@/src/shared/ApiResponse";
import { zodValidateJson } from "@/src/shared/ZodValidator";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const user = await listAsesorias();
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, AsesoriaCreateDTO);
    const userId = await createAsesory(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getAsesoriaById(id);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { validated } = await zodValidateJson(req, AsesoriaUpdateDTO);
    const user = await updateAsesoria(id,validated);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
