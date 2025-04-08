export enum PaymentEnum {
  Cash = 1,
  Card = 2,
}

export const PaymentEnumList = [
  { value: PaymentEnum.Cash, label: "Tiền mặt" },
  { value: PaymentEnum.Card, label: "Thẻ" },
];
