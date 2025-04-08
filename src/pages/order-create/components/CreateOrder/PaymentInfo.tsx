import ShareAntCard from "@components/Antd/Card";
import ShareAntInputCurrency from "@components/Antd/InputNumber/InputCurrency";
import { rule } from "@core/utils/form-rules";
import { PaymentEnum, PaymentEnumList } from "@pages/order-create/enums/PaymentEnum";
import { useOrderCreate } from "@pages/order-create/hook/useOrderCreate";
import { Form, Input, Radio } from "antd";
import { Rule } from "antd/es/form";

const PaymentInfo = () => {
  const { formWatch, totalPrice } = useOrderCreate();

  const validationCash = (): Rule => {
    return {
      message: "Số tiền nhập nhỏ hơn giá trị đơn hàng!",
      validator: (_, value) => {
        if (value && value < totalPrice) {
          return Promise.reject();
        }

        return Promise.resolve();
      },
    };
  };
  return (
    <ShareAntCard title="Thông tin thanh toán" bodyClassName="grid grid-cols-1 gap-x-6 pb-1">
      <Form.Item label="Chọn phương thức thanh toán" name="paymentType">
        <Radio.Group className="grid grid-cols-2" options={PaymentEnumList} />
      </Form.Item>

      {formWatch?.paymentType === PaymentEnum.Cash ? (
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
          <Form.Item label="Số tiền khách đưa" rules={[rule.required(), validationCash()]} name="cashAmount">
            <ShareAntInputCurrency size="large" />
          </Form.Item>
          <Form.Item label="Số tiền thừa">
            <span>
              {(formWatch?.cashAmount && formWatch?.cashAmount > totalPrice
                ? formWatch?.cashAmount - totalPrice
                : 0
              ).toCurrencyFormat()}{" "}
              VNĐ
            </span>
          </Form.Item>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            <Form.Item label="Tên thẻ" name="cardHolderName">
              <Input maxLength={200} placeholder="Nhập tên thẻ" size="large" />
            </Form.Item>
            <Form.Item label="Số thẻ" name="cardNumber" rules={[rule.required(), rule.numberOnly()]}>
              <Input maxLength={20} placeholder="EX: 321 312 433 312" size="large" />
            </Form.Item>
          </div>
        </>
      )}
    </ShareAntCard>
  );
};

export default PaymentInfo;
