import * as Joi from "joi";

const validationSchemas = {
  createOrderSchema: Joi.object().keys({
    customer_name: Joi.string().required().label("customer_name").max(50),
    product_name: Joi.string().required().label("product_name").max(50),
    product_category: Joi.string().required().label("product_category").max(50),
    price: Joi.number().required().label("price"),
    order_date: Joi.date()
      .required()
      .label("order_date")
      .allow(null, "")
      .messages({
        "date.min": "Invalid date. Kindly enter a date in the future.",
      }),
  }),

  fetchOrderSchema: Joi.object().keys({
    order_number: Joi.string().required().label("order_number"),
    customer_name: Joi.string().label("customer_name").max(50),
    product_name: Joi.string().label("product_name").max(50),
    product_category: Joi.string().label("product_category").max(50),
    price: Joi.number().label("price"),
    order_date: Joi.date()
      .label("order_date")
      .allow(null, "")
      .messages({
        "date.min": "Invalid date. Kindly enter a date in the future.",
      }),
  }),
};

export { validationSchemas };
