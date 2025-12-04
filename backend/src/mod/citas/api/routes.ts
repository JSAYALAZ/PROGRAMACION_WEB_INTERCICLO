import { Router } from "express";
import { listSendedAsesories } from "../applications/listSendedAsesories";
import { ApiResponse } from "src/shared/ApiResponse";
import { listReceivedAsesories } from "../applications/listReceivedAsesories";

const router = Router();

router.get("/:userId/received", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await listReceivedAsesories(userId);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

router.get("/:userId/sended", async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await listSendedAsesories(userId);
    return ApiResponse.success(res, "Correcto", user);
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
