import React, { memo } from "react";
import { FormFieldProps } from "../types";

export const FormSelectInput: React.FunctionComponent<FormFieldProps> = ({
  value,
  handleChange,
  selectOptions,
  placeholder,
}): JSX.Element => {
  return <select value={value} placeholder={placeholder} />;
};
