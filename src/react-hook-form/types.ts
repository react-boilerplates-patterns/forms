import * as Yup from "yup";
import { FormState } from "react-hook-form";

export type Component<T> = React.FC<T>;

export type FormFieldProps = {
  handleChange: (value: any) => void;
  value: any;
  placeholder?: string;
  inputOptions?: HTMLInputElement | HTMLTextAreaElement;
  selectOptions?: HTMLSelectElement;
  isAddressRegionChosen?: boolean;
  maskOptions?: any; // depend on OS choose mask library
  maskType?: any; // depend on OS choose mask library
};

export type SchemaValue = {
  sectionName?: string;
  sectionDescription?: string;
  fieldsForm?: Array<{
    name: string;
    Component: Component<FormFieldProps>;
    placeholder?: string;
    defaultValue?: string | null;
    inputOptions?: HTMLInputElement;
    selectOptions?: HTMLSelectElement;
    fieldContainerStyle?: React.CSSProperties;
    fieldInputContainerStyle?: React.CSSProperties;
    maskOptions?: any; // depend on OS choose mask library
    maskType?: any; // depend on OS choose mask library
  }>;
};

export type ValidationFormSchema = Yup.AnyObjectSchema;
