import { orderRepository } from "../database/prisma.client";

const updateOrderItemService = async (data) => {
  try {
    const { order_number, ...rest } = data;
    const orderItem = await orderRepository.findUnique({
      where: { order_number: Number(order_number) },
    });
    //check if item exists--- error handling
    if (!orderItem || !orderItem.order_number) {
      return {
        isSuccess: false,
        message: "Order Item not found",
      };
    }
    const updatedOrderItem = await orderRepository.update({
      where: { order_number: Number(order_number) },
      data: rest,
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

export default updateOrderItemService;
