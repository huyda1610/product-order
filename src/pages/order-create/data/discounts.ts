import { DiscountsDto } from "../types/Discounts";

export const DISCOUNTS: DiscountsDto[] = [
  {
    id: "DISC10",
    name: "DISC10",
    description: "Giảm 10%",
    action: (value: number) => value * 0.9, // Giảm 10% giá trị ban đầu
  },
  {
    id: "DISC20",
    name: "DISC20",
    description: "Giảm 20%",
    action: (value: number) => value * 0.8, // Giảm 20% giá trị ban đầu
  },
  {
    id: "DISC50",
    name: "DISC50",
    description: "Giảm 50%",
    action: (value: number) => value * 0.5, // Giảm 50% giá trị ban đầu
  },
  {
    id: "FIXED100",
    name: "FIXED100",
    description: "Giảm cố định 100",
    action: (value: number) => Math.max(value - 100, 0), // Giảm 100, đảm bảo không âm
  },
  {
    id: "DISC15",
    name: "DISC15",
    description: "Giảm 15% cho đơn trên 500",
    action: (value: number) => (value >= 500 ? value * 0.85 : value), // Giảm 15% nếu giá trị >= 500
  },
];
