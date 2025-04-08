import { twMerge } from "tailwind-merge";
import ShareAntInputNumber, { ShareAntInputNumberProps } from "..";

type ShareAntInputCurrencyProps = ShareAntInputNumberProps & {};

const numberToCurrency = (val: any): string => {
  if (!val) return "";
  return Number(val).toCurrencyFormat();
};

const currencyToNumber = (val: any) => {
  if (!val) return "" as any;
  return val.replace(/^\$/, "").replace(/,/g, "");
};

function ShareAntInputCurrency({ ...props }: ShareAntInputCurrencyProps) {
  return (
    <ShareAntInputNumber
      {...props}
      prefix={props?.prefix ?? "VNĐ"}
      max={props?.max ?? 999999999999999}
      className={twMerge("w-full", props.className)}
      formatter={(value) => numberToCurrency(value)}
      parser={(value) => currencyToNumber(value)}
    />
  );
}

export default ShareAntInputCurrency;
