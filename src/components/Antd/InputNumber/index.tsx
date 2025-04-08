import { InputNumber, InputNumberProps } from "antd";
import { twMerge } from "tailwind-merge";

export type ShareAntInputNumberProps = InputNumberProps;

function ShareAntInputNumber({ ...props }: ShareAntInputNumberProps) {
  return (
    <InputNumber
      {...props}
      changeOnWheel
      min={props?.min ?? 1}
      maxLength={props?.maxLength ?? 19}
      className={twMerge("w-full", props.className)}
    />
  );
}

export default ShareAntInputNumber;
