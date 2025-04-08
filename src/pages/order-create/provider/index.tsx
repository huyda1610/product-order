import { Form } from "antd";
import React from "react";
import { FormType } from "../types/FormType";
import { ProductsDto } from "../types/ProductsDto";
import { OrderCreateContext } from "./context";

export const OrderCreateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [form] = Form.useForm<FormType>();
  const formWatch = Form.useWatch([], form);
  const [products, setProducts] = React.useState<ProductsDto[]>([]);

  return (
    <OrderCreateContext.Provider
      value={{
        form,
        formWatch,
        products,
        setProducts,
        totalPrice: products.reduce((total, item) => total + item.price * item.quantity, 0),
      }}
    >
      {children}
    </OrderCreateContext.Provider>
  );
};
