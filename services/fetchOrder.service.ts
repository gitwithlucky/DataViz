import { orderRepository } from "../database/prisma.client";

const fetchorderItemService = async (data) => {
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

export default fetchorderItemService;
