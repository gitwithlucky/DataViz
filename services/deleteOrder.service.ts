import { orderRepository } from "../database/prisma.client";

const deleteOrderItemService = async (data) => {
  try {
    const { order_number } = data;
    const todoItem = await orderRepository.delete({
      where: { order_number: Number(order_number) },
    });
    return {
      isSuccess: true,
      message: "Order Item Deleted",
      todoItem,
    };
  } catch (error) {
    console.log(">>>>", error.message);
    return { isSuccess: false, message: "Failed to delete Item" };
  }
};

export default deleteOrderItemService;
