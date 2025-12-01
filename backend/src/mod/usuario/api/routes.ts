import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { UserCreateDTO } from "./dto/input";
import {  listUsers } from "../applications/listUsers";
import { ApiResponse } from "src/shared/ApiResponse";
import { createUser } from "../applications/createUser";

const router = Router();

router.get("/", async (req, res) => {
  const user = await listUsers();
  return ApiResponse.success(res,"Correcto",user);
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, UserCreateDTO);
    const userId = await createUser(validated);
    return ApiResponse.success(res, "Correcto", userId);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
// router.get("/:id", controller.getOne);

export default router;
