import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

import { antDefaultTheme } from "@themes/index.ts";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

import "@ant-design/v5-patch-for-react-19";
import "@core/type/number.ts";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale("vi");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider locale={viVN} theme={antDefaultTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);

