import ShareAntCard from "@components/Antd/Card";
import { PaymentEnum, PaymentEnumList } from "@pages/order-create/enums/PaymentEnum";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import Item from "./Item";

const PaymentInfo = () => {
  const { formWatch, totalPrice } = useOrderCreate();
  return (
    <ShareAntCard title="Thông tin thanh toán" bodyClassName="flex flex-col gap-2">
      <Item
        label="Loại thanh toán"
        value={PaymentEnumList.find((item) => item.value === formWatch.paymentType)?.label}
      />
      {formWatch.paymentType === PaymentEnum.Cash ? (
        <>
          <Item label="Số tiền khách đưa" value={formWatch?.cashAmount?.toCurrencyFormat() + " VNĐ"} />
          <Item
            label="Số tiền thừa"
            value={
              (formWatch?.cashAmount && formWatch?.cashAmount > totalPrice
                ? formWatch?.cashAmount - totalPrice
                : 0
              ).toCurrencyFormat() + " VNĐ"
            }
          />
        </>
      ) : (
        <>
          <Item label="Tên thẻ" value={formWatch?.cardHolderName} />
          <Item label="Số thẻ" value={formWatch?.cardNumber} />
        </>
      )}
    </ShareAntCard>
  );
};

export default PaymentInfo;
