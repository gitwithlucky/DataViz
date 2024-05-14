import { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/app.helpers";
import { validationSchemas } from "../utils/validationSchemas";
import validate from "../utils/validator";
import deleteTodoItemService from "../services/deleteOrder.service";

const deleteTodoItem = async (req: Request, response: Response) => {
  const { errors, data } = validate(validationSchemas.fetchOrderSchema, {
    ...req.params,
  });
  if (errors) {
    return sendError({ response, errors });
  }
  console.log(data);
  const { isSuccess, message, todoItem } = await deleteTodoItemService(data);
  if (isSuccess) {
    return sendSuccess({ response, data: todoItem, message });
  }

  return sendError({ response, message });
};

export default deleteTodoItem;
