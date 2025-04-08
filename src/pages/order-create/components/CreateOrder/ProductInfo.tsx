import ShareAntCard from "@components/Antd/Card";
import ShareAntEmpty from "@components/Antd/Empty";
import { PRODUCTS } from "@pages/order-create/data/products";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import { Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import ProductTable from "../ProductTable";

const ProductInfo = () => {
  const { setProducts, products } = useOrderCreate();

  const handleSelectProduct = (value: string): void => {
    const selectedProduct = PRODUCTS.find((product) => product.id === value);

    if (!selectedProduct) return;

    setProducts((prevProducts) => {
      return [...prevProducts, { ...selectedProduct, quantity: 1, discount: null }];
    });
  };

  return (
    <ShareAntCard title="Thông tin giỏ hàng" bodyClassName="grid grid-cols-1 gap-x-6">
      <FormItem label="Chọn sản phẩm">
        <Select
          size="large"
          placeholder="Chọn sản phẩm cho giỏ hàng"
          options={PRODUCTS.map((product) => ({
            label: product.name,
            value: product.id,
            disabled: products.some((p) => p.id === product.id), // Disable if already selected
          }))}
          onChange={handleSelectProduct}
        />
      </FormItem>
      {products.length === 0 ? (
        <ShareAntEmpty description="Không có sản phẩm" />
      ) : (
        <>
          <ProductTable />
        </>
      )}
    </ShareAntCard>
  );
};

export default ProductInfo;
