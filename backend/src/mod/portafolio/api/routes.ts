import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { listPortafolios } from "../applications/listPortafolios";
import { ApiResponse } from "src/shared/ApiResponse";
import { PortafolioCreateDTO } from "./dto/input";
import { createPortafolio } from "../applications/createPortafolio";
import { getPortafolioById } from "../applications/getPortafolioById";

const router = Router();

router.get("/", async (req, res) => {
   try {
      const user = await listPortafolios();
  return ApiResponse.success(res, "Correcto", user);
    } catch (error) {
      return ApiResponse.error(res, error);
    }
  
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, PortafolioCreateDTO);
    const userId = await createPortafolio(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getPortafolioById(id);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
