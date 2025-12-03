import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { listPortafolios } from "../applications/listPortafolios";
import { ApiResponse } from "src/shared/ApiResponse";
import { PortafolioCreateDTO } from "./dto/input";
import { createPortafolio } from "../applications/createPortafolio";
import { getPortafolioById } from "../applications/getPortafolioById";
import { PortafolioMapper } from "./mapper/portafolio_mapper";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dates = await listPortafolios();
    const resp = dates.map((user) => {
      return PortafolioMapper.map(user);
    });
    return ApiResponse.success(res, "Correcto", resp);
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
    const data = await getPortafolioById(id);
    return ApiResponse.success(res, "Correcto", PortafolioMapper.map(data));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
