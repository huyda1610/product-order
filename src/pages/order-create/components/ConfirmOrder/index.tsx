import ShareAntCard from "@components/Antd/Card";
import { SolarCheckCircleSvg } from "@components/Svg/solar/solar-check-circle";
import { SolarCloseCircleSvg } from "@components/Svg/solar/solar-close-circle";
import { showNotificationSuccess } from "@core/utils/message";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import { Button } from "antd";
import { twMerge } from "tailwind-merge";
import ProductTable from "../ProductTable";
import PaymentInfo from "./PaymentInfo";

type PropsType = {
  handleCancel: () => void;
};

const ConfirmOrderModal: React.FC<PropsType> = ({ handleCancel }) => {
  const { formWatch, form, setProducts } = useOrderCreate();

  const handleConfirm = () => {
    handleCancel();
    form.resetFields();
    setProducts([]);
    showNotificationSuccess();
  };

  return (
    <>
      {/* Title */}
      <section className={`${twMerge("flex flex-row justify-between gap-2")}`}>
        <h2 className="text-[18px] font-bold leading-[28px]">Xác nhận thanh toán</h2>
      </section>

      {/* Body */}
      <section className={`${twMerge("my-6 max-h-[calc(70vh)] overflow-y-auto")}`}>
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ShareAntCard title="Thông tin khách hàng" bodyClassName="flex flex-col gap-2">
            <div>
              <span className="text-text-secondary inline-block w-32">Tên khách hàng</span>
              <strong className="text-text">{formWatch?.customerName}</strong>
            </div>
            <div>
              <span className="text-text-secondary inline-block w-32">Email</span>
              <strong className="text-text">{formWatch?.customerEmail ?? "N/A"}</strong>
            </div>
            <div>
              <span className="text-text-secondary inline-block w-32">Số điện thoại</span>
              <strong className="text-text">{formWatch?.customerPhone ?? "N/A"}</strong>
            </div>
          </ShareAntCard>

          <PaymentInfo />
        </div>
        <ShareAntCard title="Thông tin giỏ hàng">
          <ProductTable viewOnly />
        </ShareAntCard>
      </section>

      {/* Footer */}
      <section className={`${twMerge("flex flex-row justify-end gap-3")}`}>
        <Button type="default" onClick={handleCancel}>
          <SolarCloseCircleSvg />
          Hủy
        </Button>
        <Button type="primary" onClick={handleConfirm}>
          <SolarCheckCircleSvg />
          Xác nhận
        </Button>
      </section>
    </>
  );
};

export default ConfirmOrderModal;
