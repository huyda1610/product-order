import { Rule } from "antd/lib/form";
import { regex } from "./regex";

// hàm required - failed nếu nhập toàn khoang trắng
const required = (message?: string): Rule => {
  return {
    required: true,
    message: message ?? "Dữ liệu không được để trống!",
    pattern: regex.requiredWithWhitespace,
  };
};

// hàm required - có thể nhập toàn khoảng trắng
const requiredWithWhitespace = (message?: string): Rule => {
  return {
    required: true,
    message: message ?? "Dữ liệu không được để trống!",
  };
};

const max = (max: number = 0, message?: string): Rule => {
  return {
    message: message ?? `Dữ liệu không được lớn hơn ${max}!`,
    validator: (_, value) => {
      if (value && value > max) {
        return Promise.reject(new Error(message ?? `Dữ liệu không được lớn hơn ${max}!`));
      }

      return Promise.resolve();
    },
  };
};

const min = (min: number = 0, message?: string): Rule => {
  return {
    message: message ?? `Dữ liệu không được nhỏ hơn ${min}!`,
    validator: (_, value) => {
      if (value && value < min) {
        return Promise.reject(new Error(message ?? `Dữ liệu không được nhỏ hơn ${min}!`));
      }

      return Promise.resolve();
    },
  };
};

const maxLength = (max: number = 0, message?: string): Rule => {
  return {
    max: max,
    message: message ?? `Dữ liệu không được dài quá ${max} ký tự!`,
  };
};

const minLength = (min: number = 1, message?: string): Rule => {
  return {
    min: min,
    message: message ?? `Dữ liệu không được ngắn hơn ${min} ký tự!`,
  };
};

const numberOnly = (message?: string): Rule => {
  return {
    pattern: regex.number,
    message: message ?? "Dữ liệu phải là số!",
  };
};

const phoneNumber = (message?: string): Rule => {
  return {
    pattern: regex.phoneNumber, // 10-15 số, có thể nhập tuỳ ý
    message: message ?? "Số điện thoại phải là số và từ 10-15 ký tự!",
  };
};

const email = (message?: string): Rule => {
  return {
    type: "email",
    message: message ?? "Email không hợp lệ!",
  };
};

const url = (message?: string): Rule => {
  return {
    type: "url",
    message: message ?? "Đường dẫn không hợp lệ!",
    validator(_, value) {
      if (!value) return Promise.resolve(); // Cho phép bỏ trống — rule required sẽ tách riêng
      try {
        const parsed = new URL(value);
        if (parsed.protocol === "http:" || parsed.protocol === "https:") {
          return Promise.resolve();
        }
        return Promise.reject();
      } catch {
        return Promise.reject();
      }
    },
  };
};

export const rule = {
  required,
  maxLength,
  minLength,
  requiredWithWhitespace,
  numberOnly,
  phoneNumber,
  email,
  url,
  max,
  min,
};
