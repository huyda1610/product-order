import RenderIf from "@components/RenderIf";
import { Card, CardProps } from "antd";
import React from "react";
import { twMerge } from "tailwind-merge";

type B2BCardProps = CardProps & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
  formCard?: boolean;
};

function ShareAntCard({
  title,
  extra,
  children,
  description,
  headerClassName,
  bodyClassName,
  formCard,
  ...props
}: B2BCardProps) {
  return (
    <Card
      {...props}
      loading={false}
      variant="borderless"
      className={twMerge("border-gray-border rounded-lg border border-solid shadow-sm", props.className)}
      styles={{
        header: {
          padding: 0,
        },
        body: {
          padding: 0,
        },
        ...props.styles,
      }}
    >
      <RenderIf ifTrue={title || extra}>
        <section className={twMerge("flex flex-row items-center justify-between px-5 pt-4", headerClassName)}>
          <div>
            <strong className="text-lg leading-none">{title}</strong>
            <span className="text-gray block text-sm">{description}</span>
          </div>
          {extra}
        </section>
      </RenderIf>

      <RenderIf ifTrue={children}>
        <section className={twMerge("px-5 py-4", formCard && "pb-1", bodyClassName)}>{children}</section>
      </RenderIf>
    </Card>
  );
}

export default ShareAntCard;
