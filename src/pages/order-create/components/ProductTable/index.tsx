import ShareAntInputCurrency from "@components/Antd/InputNumber/InputCurrency";
import RenderIf from "@components/RenderIf";
import { SolarAddCircleSvg } from "@components/Svg/solar/solar-add-circle";
import { SolarMinusCircleSvg } from "@components/Svg/solar/solar-minus-circle";
import { SolarTrashBinTrashSvg } from "@components/Svg/solar/solar-trash-bin";
import { debounceFn } from "@core/utils/debounce";
import { DISCOUNTS } from "@pages/order-create/data/discounts";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import { ProductsDto } from "@pages/order-create/types/ProductsDto";
import { Button, Divider, Select, Tooltip } from "antd";
import { useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

type PropsType = {
  viewOnly?: boolean;
};

const ProductTable: React.FC<PropsType> = ({ viewOnly }) => {
  const { products, setProducts, totalPrice } = useOrderCreate();
  const [removingId, setRemovingId] = useState<string | null>(null); // ID của phần tử đang bị xóa

  const handleDecreaseQuantity = (productId: string): void => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: Math.max(product.quantity - 1, 1) } : product,
      ),
    );
  };

  const handleIncreaseQuantity = (productId: string): void => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity: Math.min(product.quantity + 1, 99) } : product,
      ),
    );
  };

  const handleRemoveProduct = (productId: string): void => {
    if (!productId) return;
    setRemovingId(productId);

    setTimeout(() => {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      setRemovingId(null);
    }, 300);
  };

  const handleChangePrice = useCallback(
    debounceFn((productId: string, value: number) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === productId ? { ...product, price: value } : product)),
      );
    }, 100),
    [],
  );

  const handleCalcPriceWithDiscount = (product: ProductsDto): string => {
    const calculateFn = DISCOUNTS.find((discount) => discount.id === product.discount)?.action;
    if (!calculateFn) return (product.price * product.quantity).toCurrencyFormat();
    return calculateFn(product.price * product.quantity).toCurrencyFormat();
  };

  const handleChangeDiscount = (productId: string, value: string): void => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === productId ? { ...product, discount: value } : product)),
    );
  };

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
    <>
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-table border-b">
              <th className="w-[300px] px-4 py-3 text-left font-semibold uppercase tracking-wider">Tên Sản phẩm</th>
              <th className="flex w-[140x] justify-center px-4 py-3 text-left font-semibold uppercase tracking-wider">
                Số lượng
              </th>
              <th className="w-[140x] px-4 py-3 text-left font-semibold uppercase tracking-wider">Mã khuyến mãi</th>
              <th className="w-[140x] px-4 py-3 text-left font-semibold uppercase tracking-wider">Giá</th>
              <th className="w-[140x] px-4 py-3 text-left font-semibold uppercase tracking-wider">Tổng Giá</th>
              {!viewOnly && (
                <th className="flex w-[140x] justify-center px-2 py-3 text-left font-semibold uppercase tracking-wider">
                  Thao tác
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.id}
                className={twMerge(
                  "transition-all duration-500 hover:bg-gray-100",
                  removingId === product.id ? "animate-fadeOut" : "animate-fadeIn",
                )}
              >
                <td className="flex w-[300px] items-center gap-3 px-4 py-4">
                  <img
                    src={`/src/assets/img/${product.image}`}
                    alt={product.name}
                    className="h-11 w-11 rounded-md bg-gray-200"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-500">{product.description}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <RenderIf ifTrue={!viewOnly}>
                      <Button
                        type="text"
                        size="small"
                        icon={<SolarMinusCircleSvg />}
                        disabled={product.quantity === 1}
                        onClick={() => handleDecreaseQuantity(product.id)}
                      />
                    </RenderIf>
                    <span className="mb-1 w-4 text-center">{product.quantity}</span>
                    <RenderIf ifTrue={!viewOnly}>
                      <Button
                        type="text"
                        size="small"
                        icon={<SolarAddCircleSvg />}
                        disabled={product.quantity === 99}
                        onClick={() => handleIncreaseQuantity(product.id)}
                      />
                    </RenderIf>
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-900">
                  {viewOnly ? (
                    <span>{DISCOUNTS.find((discount) => discount.id === product?.discount)?.name || "N/A"}</span>
                  ) : (
                    <Select
                      className="w-[180px]"
                      allowClear
                      options={DISCOUNTS.map((discount) => ({
                        label: discount.name,
                        value: discount.id,
                      }))}
                      placeholder="Chọn mã khuyến mãi"
                      onChange={(value) => handleChangeDiscount(product.id, value)}
                    />
                  )}
                </td>
                <td className="px-4 py-4 text-gray-900">
                  {viewOnly ? (
                    <span>{product.price.toLocaleString("vi-VN")} VNĐ</span>
                  ) : (
                    <ShareAntInputCurrency
                      value={product.price}
                      onChange={(value) => handleChangePrice(product.id, value as number)}
                    />
                  )}
                </td>
                <td className="w-[200px] px-4 py-4 text-gray-900">
                  <div>
                    <p className={product.discount ? "line-through" : ""}>
                      {(product.price * product.quantity).toCurrencyFormat()} VNĐ
                    </p>
                    {product.discount && <p>{handleCalcPriceWithDiscount(product)} VNĐ</p>}
                  </div>
                </td>
                {!viewOnly && (
                  <td className="py-4 text-gray-900">
                    <div className="flex items-center justify-center">
                      <Tooltip title="Xóa sản phẩm">
                        <Button
                          danger
                          type="text"
                          icon={<SolarTrashBinTrashSvg />}
                          onClick={() => handleRemoveProduct(product.id)}
                          disabled={removingId === product.id} // Disable khi đang xóa
                        />
                      </Tooltip>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Divider className="border-black" dashed />

      <section className="flex w-full flex-col items-end gap-2">
        <div className="flex w-full justify-end text-base">
          <span className="text-text-secondary text-right">Tổng giá gốc</span>
          <strong className="text-text ml-4">{totalPrice.toCurrencyFormat()} VNĐ</strong>
        </div>
        <div className="flex w-full justify-end text-base">
          <span className="text-text-secondary text-right">Giảm giá</span>
          <strong className="text-error ml-4"> - {calculateTotalDiscount(products).toCurrencyFormat()} VNĐ</strong>
        </div>
        <div className="flex w-full justify-end text-lg">
          <span className="text-text-secondary text-right">Tổng</span>
          <strong className="text-text ml-4">
            {(totalPrice - calculateTotalDiscount(products)).toCurrencyFormat()} VNĐ
          </strong>
        </div>
      </section>
    </>
  );
};

export default ProductTable;
