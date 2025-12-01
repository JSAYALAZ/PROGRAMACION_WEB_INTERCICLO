import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { ProgrammerProfileCreateDTO } from "./dto/input";
import { createProgrammerProfile } from "../applications/createProgrammerProfile";
import { ApiResponse } from "src/shared/ApiResponse";
import { listProgrammerProfile } from "../applications/listProgrammerProfile";
import { getProgrammerProfileById } from "../applications/getProgrammerProfileById";

const router = Router();

router.get("/", async (req, res) => {
   try {
    const user = await listProgrammerProfile();
    return ApiResponse.success(res,"Correcto",user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, ProgrammerProfileCreateDTO);
    const userId = await createProgrammerProfile(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getProgrammerProfileById(id);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;