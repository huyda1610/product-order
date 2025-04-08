import { ReactNode } from "react";

type RenderIfProps = {
  ifTrue: boolean | any;
  children: ReactNode;
};

const RenderIf = ({ ifTrue, children }: RenderIfProps) => {
  return ifTrue ? <>{children}</> : null;
};

export default RenderIf;
