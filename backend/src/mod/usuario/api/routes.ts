import { Router } from "express";
import { zodValidateJson } from "src/shared/ZodValidator";
import { UserCreateDTO, UserUpdateDTO } from "./dto/input";
import { listUsers } from "../applications/listUsers";
import { ApiResponse } from "src/shared/ApiResponse";
import { createUser } from "../applications/createUser";
import { getUserById } from "../applications/getUserById";
import { updateUser } from "../applications/updateUser";
import { UserMapper } from "./mapper/user_mapper";

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
    const userId = await createUser(validated);
    return ApiResponse.success(res, "Correcto", userId);
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
