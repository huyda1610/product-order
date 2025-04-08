import ShareAntCard from "@components/Antd/Card";
import { rule } from "@core/utils/form-rules";
import { Form, Input } from "antd";

const InfoForm = () => {
  return (
    <ShareAntCard title="Thông tin khách hàng" bodyClassName="grid sm:grid-cols-2 grid-cols-1 gap-x-6 pb-1">
      <Form.Item className="sm:col-span-2" label="Tên khách hàng" rules={[rule.required()]} name="customerName">
        <Input maxLength={200} size="large" placeholder="EX: Đỗ Anh Huy, ..." />
      </Form.Item>
      <Form.Item label="Số điện thoại" rules={[rule.phoneNumber()]} name="customerPhoneNumber">
        <Input maxLength={20} size="large" placeholder="EX: 0963660099" />
      </Form.Item>
      <Form.Item label="Email" rules={[rule.email()]} name="customerEmail">
        <Input maxLength={100} size="large" placeholder="EX: huyda4@gmail.com" name="customerEmail" />
      </Form.Item>
    </ShareAntCard>
  );
};

export default InfoForm;
