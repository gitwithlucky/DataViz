-- CreateTable
CREATE TABLE "Orders" (
    "order_number" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customer_name" VARCHAR(255) NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_category" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "order_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("order_number")
);
