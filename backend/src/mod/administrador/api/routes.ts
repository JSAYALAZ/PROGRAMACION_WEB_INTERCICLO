import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{res.send("Hola")});
// router.post("/", controller.create);
// router.get("/:id", controller.getOne);

export default router;