export type ProductsBaseDto = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ProductsDto = ProductsBaseDto & {
  quantity: number;
  discount: string | null; // Mã khuyến mãi
};
