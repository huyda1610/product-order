import { useContext } from "react";
import { OrderCreateContext } from "../provider/context";

export const useOrderCreate = () => {
  const context = useContext(OrderCreateContext);
  if (!context) {
    throw new Error("useOrderCreate must be used within a TaskAssignmentDetailProvider");
  }
  return context;
};
