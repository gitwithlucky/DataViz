import { orderRepository } from "../database/prisma.client";

const createOrderItemService = async (data) => {
  try {
    const orderItem = await orderRepository.create({ data });
    //check if order item wasnt created--- error handling
    if (!orderItem || !orderItem.order_number) {
      throw new Error("Create operation failed to create order item");
    }

    return {
      isSuccess: true,
      message: "Order Item created successfully",
      orderItem,
    };
  } catch (error) {
    console.log(">>>>", error.message);
    return { isSuccess: false, message: "Failed to create Order Item" };
  }
};

export default createOrderItemService;
