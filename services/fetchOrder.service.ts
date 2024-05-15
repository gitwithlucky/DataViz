import { orderRepository } from "../database/prisma.client";

const fetchOrderItemService = async (data) => {
  try {
    const { order_number } = data;
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
    return {
      isSuccess: true,
      message: "Request successful",
      orderItem,
    };
  } catch (error) {
    console.log(">>>>", error.message);
    return { isSuccess: false, message: "Failed to fetch Item" };
  }
};

export default fetchOrderItemService;
