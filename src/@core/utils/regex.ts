const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const accent = /[\u0300-\u036f]/g;
const phoneNumber = /^(?=.{10,15}$)(\+?\d{1,4})?[\d\s\-().]{6,}$/;
const url = /^(https?:\/\/)?(([\da-z.-]+)\.([a-z.]{2,6}))(:\d{1,5})?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
const number = /^\d*$/;
const guid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const requiredWithWhitespace = /^(?!\s*$)[\s\S]+$/;

export const regex = {
  email,
  url,
  phoneNumber,
  accent,
  number,
  guid,
  requiredWithWhitespace,
};
