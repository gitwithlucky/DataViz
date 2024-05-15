import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/app.helpers";
import fetchOrderService from "../services/fetchOrders.service";

const fetchOrderItem = async (req: Request, response: Response) => {
  const { isSuccess, message, orderItems } = await fetchOrderService();
  if (isSuccess) {
    return sendSuccess({ response, data: orderItems, message });
  }

  return sendError({ response, message });
};

export default fetchOrderItem;
