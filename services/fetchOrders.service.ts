import { orderRepository } from "../database/prisma.client";

const fetchOrderItemsService = async () => {
  try {
    const orderItems = await orderRepository.findMany({
      orderBy: {
        order_number: 'asc'
      }
    });
    return {
      isSuccess: true,
      message: "Request successful",
      orderItems,
    };
  } catch (error) {
    console.log(">>>>", error.message);
    return { isSuccess: false, message: "Failed to fetch Order Items" };
  }
};

export default fetchOrderItemsService;
