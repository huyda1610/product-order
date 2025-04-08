import { message, notification } from "antd";
import { ArgsProps } from "antd/es/notification/interface";

const showMessageError = (content: string = "Có lỗi xảy ra") => {
  return message.error(content);
};

const showMessageSuccess = (content: string = "Xử lý thành công") => {
  return message.success(content);
};

const showNotificationError = (message: string) => {
  return notification.error({
    message: "Thao tác không thành công",
    description: message ?? "Lỗi trong quá trình xử lý, vui lòng thử lại!",
    placement: "topRight",
  });
};

const showNotificationSuccess = (description?: string, options?: ArgsProps) => {
  return notification.success({
    ...options,
    message: options?.message ?? "Xử lý thành công",
    description: description ?? "Thao tác của bạn đã được thực hiện!",
    placement: options?.placement ?? "topRight",
  });
};

const showNotificationWarning = (description: string, options?: ArgsProps) => {
  return notification.warning({
    ...options,
    message: options?.message ?? "Cảnh báo",
    description: description ?? "Cảnh báo trong quá trình xử lý, vui lòng kiểm tra lại!",
    placement: options?.placement ?? "topRight",
  });
};

export {
  showMessageError,
  showMessageSuccess,
  showNotificationError,
  showNotificationSuccess,
  showNotificationWarning,
};
