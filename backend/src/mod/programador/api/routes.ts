import { Router } from "express";

import {
  ProgrammerProfileCreateDTO,
  ProgrammerProfileUpdateDTO,
} from "./dto/input";
import { createProgrammerProfile } from "../applications/createProgrammerProfile";
import { listProgrammerProfile } from "../applications/listProgrammerProfile";
import { getProgrammerProfileById } from "../applications/getProgrammerProfileById";
import { ProgrammerMapper } from "./mapper/programmer_mapper";
import { updateProgrammerProfile } from "../applications/updateProgrammerProfile";
import { ApiResponse } from "@/src/shared/ApiResponse";
import { zodValidateJson } from "@/src/shared/ZodValidator";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const profiles = await listProgrammerProfile();
    const resp = profiles.map((user) => {
      return ProgrammerMapper.map(user);
    });
    return ApiResponse.success(res, "Correcto", resp);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(
      req,
      ProgrammerProfileCreateDTO
    );
    const userId = await createProgrammerProfile(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.put("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(
      req,
      ProgrammerProfileUpdateDTO
    );
    const userId = await updateProgrammerProfile(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getProgrammerProfileById(id);
    return ApiResponse.success(res, "Correcto", ProgrammerMapper.map(user));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
