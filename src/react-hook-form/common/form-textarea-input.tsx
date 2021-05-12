import React, { memo } from "react";
import { FormFieldProps } from "../types";

// eslint-disable-next-line react/display-name
export const FormTextareaInput: React.FunctionComponent<FormFieldProps> = memo(
  ({ handleChange, inputOptions, ...rest }): JSX.Element => {
    return <textarea onChange={handleChange} />;
  },
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
