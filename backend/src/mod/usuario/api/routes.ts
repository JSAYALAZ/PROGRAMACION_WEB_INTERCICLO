import { Router } from "express";

import { UserCreateDTO, UserUpdateDTO } from "./dto/input";
import { listUsers } from "../applications/listUsers";
import { createUser } from "../applications/createUser";
import { getUserById } from "../applications/getUserById";
import { updateUser } from "../applications/updateUser";
import { UserMapper } from "./mapper/user_mapper";
import { ProgrammerMapper } from "../../programador/api/mapper/programmer_mapper";
import { getProgrammerProfileByUserId } from "../../programador/applications/getProgrammerProfileByUserId";
import { ApiResponse } from "../../../shared/ApiResponse";
import { zodValidateJson } from "../../../shared/ZodValidator";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dates = await listUsers();
    const resp = dates.map((user) => {
      return UserMapper.map(user);
    });
    return ApiResponse.success(res, "Correcto", resp);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.post("/", async (req, res) => {
  try {
    const { validated } = await zodValidateJson(req, UserCreateDTO);
    const user = await createUser(validated);
    return ApiResponse.success(res, "Correcto", UserMapper.map(user));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    return ApiResponse.success(res, "Correcto", UserMapper.map(data));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.get("/:id/programmerProfile", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id)
    const profile = await getProgrammerProfileByUserId(user.getId());
    return ApiResponse.success(res, "Correcto", ProgrammerMapper.map(profile));
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { validated } = await zodValidateJson(req, UserUpdateDTO);
    const user = await updateUser(id, validated);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
