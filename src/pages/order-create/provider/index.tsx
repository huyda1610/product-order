import { Form } from "antd";
import React from "react";
import { DISCOUNTS } from "../data/discounts";
import { FormType } from "../types/FormType";
import { ProductsDto } from "../types/ProductsDto";
import { OrderCreateContext } from "./context";

export const OrderCreateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [form] = Form.useForm<FormType>();
  const formWatch = Form.useWatch([], form);
  const [products, setProducts] = React.useState<ProductsDto[]>([]);

  const calculateTotalDiscount = (products: ProductsDto[]): number => {
    let totalDiscount = 0;

    products.forEach((product) => {
      const originalPrice = product.price * product.quantity;

      if (product.discount) {
        const discount = DISCOUNTS.find((d) => d.id === product.discount);
        if (discount) {
          const discountedPrice = discount.action(originalPrice);
          totalDiscount += originalPrice - discountedPrice;
        }
      }
    });

    return totalDiscount;
  };

  return (
    <OrderCreateContext.Provider
      value={{
        form,
        formWatch,
        products,
        setProducts,
        totalDefaultPrice: products.reduce((total, item) => total + item.price * item.quantity, 0),
        totalDiscount: calculateTotalDiscount(products),
        totalPrice:
          products.reduce((total, item) => total + item.price * item.quantity, 0) - calculateTotalDiscount(products),
      }}
    >
      {children}
    </OrderCreateContext.Provider>
  );
};
