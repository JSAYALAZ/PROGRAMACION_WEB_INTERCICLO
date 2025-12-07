import { Router } from "express";
import { listSendedAsesories } from "../applications/listSendedAsesories";
import { ApiResponse } from "../../../shared/ApiResponse";
import { listReceivedAsesories } from "../applications/listReceivedAsesories";
import { AsesoriaMapper } from "./mapper/asesoria_mapper";

const router = Router();

router.get("/:userId/received", async (req, res) => {
  try {
    const { userId } = req.params;
    const dates = await listReceivedAsesories(userId);
    return ApiResponse.success(
      res,
      "Correcto",
      dates.map((d) => AsesoriaMapper.map(d))
    );
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

router.get("/:userId/sended", async (req, res) => {
  try {
    const { userId } = req.params;
    const dates = await listSendedAsesories(userId);
    return ApiResponse.success(
      res,
      "Correcto",
      dates.map((d) => AsesoriaMapper.map(d))
    );
  } catch (error) {
    return ApiResponse.error(res, error);
  }
});

export default router;
