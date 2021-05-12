import React from "react";
import InputMask from "react-input-mask";
import { FormFieldProps } from "../types";

export const FormMaskedInput: React.FC<FormFieldProps> = ({
  handleChange,
  value,
  inputOptions,
  placeholder,
  maskOptions,
  maskType = "datetime",
}) => {
  return (
    <InputMask
      mask="99999-9999"
      type={maskType}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
