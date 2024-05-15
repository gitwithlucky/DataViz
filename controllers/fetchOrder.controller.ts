import { Request, Response } from "express";
import validate from "../utils/validator";
import { validationSchemas } from "../utils/validationSchemas";
import { sendError, sendSuccess } from "../utils/app.helpers";
import fetchOrderItemService from "../services/fetchOrder.service";

const fetchOrderItem = async (req: Request, response: Response) => {
  const { errors, data } = validate(
    validationSchemas.fetchOrderSchema,
    req.params
  );
  if (errors) {
    return sendError({ response, errors });
  }

  const { isSuccess, message, orderItem } = await fetchOrderItemService(data);
  if (isSuccess) {
    return sendSuccess({ response, data: orderItem, message });
  }

  return sendError({ response, message });
};

export default fetchOrderItem;
