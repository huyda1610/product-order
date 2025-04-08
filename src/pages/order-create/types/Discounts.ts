export type DiscountsDto = {
  id: string;
  description: string;
  name: string;
  action: (value: number) => number;
};
