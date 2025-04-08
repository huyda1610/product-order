import usePageTitle from "@hooks/usePageTitle";
import CreateOrder from "./components/CreateOrder";
import { OrderCreateProvider } from "./provider";

const OrderCreatePage = () => {
  usePageTitle("Tạo đơn hàng");

  return (
    <OrderCreateProvider>
      <article className="mx-auto w-full max-w-7xl p-6 pt-2">
        <h1 className="mb-6">Tạo đơn hàng</h1>
        <CreateOrder />
      </article>
    </OrderCreateProvider>
  );
};

export default OrderCreatePage;
