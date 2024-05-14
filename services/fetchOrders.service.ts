import { orderRepository } from "../database/prisma.client";

const fetchTodoItemsService = async () => {
  try {
    const orderItems = await orderRepository.findMany();
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

export default fetchTodoItemsService;
