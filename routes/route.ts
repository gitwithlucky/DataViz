import { Router, Request, Response } from "express";
import createOrder from "../controllers/createOrder.controller";
import deleteOrder from "../controllers/deleteOrder.controller";
import fetchOrder from "../controllers/fetchOrder.controller";
import fetchOrders from "../controllers/fetchOrders.controller";
import updateOrder from "../controllers/updateOrder.controller";
import { sendError } from "../utils/app.helpers";

const router: Router = Router();

router.post("/create_order", createOrder);
router.get("/fetch_order/:order_number", fetchOrder);
router.get("/fetch_orders", fetchOrders);
router.patch("/update_order/:order_number", updateOrder);
router.delete("/delete_order/:order_number", deleteOrder);

//Do User CRUD

router.all("*", (_req: Request, _res: Response) => {
  return sendError({
    response: _res,
    errors: {},
    message: "Unsupported Request URL or Method",
    code: 405
})
});

export default router;
