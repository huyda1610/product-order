import { FormInstance } from "antd";
import { FormType } from "./FormType";
import { ProductsDto } from "./ProductsDto";

export type ContextType = {
  form: FormInstance<FormType>;
  formWatch: FormType;
  products: ProductsDto[];
  setProducts: React.Dispatch<React.SetStateAction<ProductsDto[]>>;

  totalDefaultPrice: number;
  totalDiscount: number;
  totalPrice: number;
};
