import { Request, Response } from "express";
import validate from "../utils/validator";
import { validationSchemas } from "../utils/validationSchemas";
import { sendError, sendSuccess } from "../utils/app.helpers";
import createOrderService from "../services/createOrder.service";

const createOrder = async (req: Request, response: Response) => {
  const { errors, data } = validate(
    validationSchemas.createOrderSchema,
    req.body
  );
  if (errors) {
    return sendError({ response, errors });
  }
  const { isSuccess, message, orderItem } = await createOrderService(data);
  if (isSuccess) {
    return sendSuccess({ response, data: orderItem, message });
  }

  return sendError({ response, message });
};

export default createOrder;
