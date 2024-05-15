import { Request, Response } from "express";
import { sendSuccess, sendError } from "../utils/app.helpers";
import { validationSchemas } from "../utils/validationSchemas";
import validate from "../utils/validator";
import updateOrderItemService from "../services/updateOrder.service";

const updateOrderItem = async (req: Request, response: Response) => {
  const { errors, data } = validate(validationSchemas.fetchOrderSchema, {
    ...req.params,
    ...req.body,
  });
  if (errors) {
    return sendError({ response, errors });
  }
  const { isSuccess, message, updatedOrderItem } = await updateOrderItemService(data);
  if (isSuccess) {
    return sendSuccess({ response, data: updatedOrderItem, message });
  }

  return sendError({ response, message });
};

export default updateOrderItem;
