import { orderRepository } from "../database/prisma.client";

const updateTodoItemService = async (data) => {
  try {
    const { order_number } = data;
    const orderItem = await orderRepository.findFirst({
      where: { order_number },
    });
    //check if item exists--- error handling
    if (!orderItem || !orderItem.order_number) {
      return {
        isSuccess: false,
        message: "Order Item not found",
      };
    }
    const updatedOrderItem = await orderRepository.update({
      where: { order_number },
      data,
    });

    return {
      isSuccess: true,
      message: "Request successful",
      updatedOrderItem,
    };
  } catch (error) {
    console.log(">>>>", error.message);
    return { isSuccess: false, message: "Failed to update Item" };
  }
};

export default updateTodoItemService;
