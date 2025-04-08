import { SolarCardSvg } from "@components/Svg/solar/solar-card";
import { PaymentEnum } from "@pages/order-create/enums/PaymentEnum";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import { customizeRequiredMark } from "@pages/order-create/utils/customizeRequiredMark";
import { Button, Form, message, Modal } from "antd";
import { useState } from "react";
import ConfirmOrderModal from "../ConfirmOrder";
import InfoForm from "./InfoForm";
import PaymentInfo from "./PaymentInfo";
import ProductInfo from "./ProductInfo";

const CreateOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { form, products } = useOrderCreate();

  const onFinish = () => {
    if (products.length === 0) {
      messageApi.warning("Vui lòng thêm sản phẩm vào đơn hàng trước khi thanh toán!");
      return;
    }

    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Form
        scrollToFirstError={{ behavior: "instant", block: "end", focus: true }}
        requiredMark={(labelNode, info) => customizeRequiredMark(labelNode, info)}
        layout="vertical"
        className="flex flex-col gap-6"
        form={form}
        onFinish={onFinish}
        initialValues={{
          products: [],
          paymentType: PaymentEnum.Cash,
        }}
      >
        <InfoForm />
        <ProductInfo />
        <PaymentInfo />

        <div className="flex justify-end">
          <Button size="large" type="primary" onClick={() => form.submit()}>
            <SolarCardSvg />
            Thanh toán
          </Button>
        </div>
      </Form>

      <Modal open={isModalOpen} width={1200} footer={null} onCancel={handleCancel}>
        <ConfirmOrderModal handleCancel={handleCancel} />
      </Modal>
    </>
  );
};

export default CreateOrder;
