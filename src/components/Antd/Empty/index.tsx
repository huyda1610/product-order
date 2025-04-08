import RenderIf from "@components/RenderIf";
import EmptySvg from "@components/Svg/Empty";
import { Button, Empty, EmptyProps } from "antd";

type ShareAntEmptyProps = EmptyProps & {
  isCreate?: boolean;
  onHandleCreate?: () => void;
  label?: string;
};

function ShareAntEmpty({
  isCreate = false,
  onHandleCreate,
  label = "Thêm mới",
  description = "Không có dữ liệu!",
  ...restprops
}: ShareAntEmptyProps) {
  return (
    <Empty
      {...restprops}
      imageStyle={restprops.imageStyle ?? { width: 160, height: 160 }}
      className={`m-0 flex h-full w-full flex-col items-center justify-center gap-2 rounded-[16px] bg-[#919eab0a] ${restprops.className}`}
      image={<EmptySvg />}
      description={<span className="text-[18px] font-bold text-gray-400">{description}</span>}
    >
      <RenderIf ifTrue={isCreate}>
        <Button onClick={onHandleCreate} type="primary">
          {label}
        </Button>
      </RenderIf>
    </Empty>
  );
}

export default ShareAntEmpty;
