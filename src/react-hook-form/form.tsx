import React from "react";
import { useForm } from "react-hook-form";
import { useTypedController } from "@hookform/strictly-typed";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaValue, ValidationFormSchema } from "./types";

interface IFormSchema {
  schema: SchemaValue[];
  formContainer?: React.CSSProperties;
  sectionContainer?: React.CSSProperties;
  fieldsContainer?: React.CSSProperties;
  validationSchema?: ValidationFormSchema;
  onSubmit: (values?: any) => void;
}

type FormValues = {
  test: string;
};

export const ReactForm: React.FC<IFormSchema> = ({
  schema,
  validationSchema,
  children,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
  });
  const TypedController = useTypedController<FormValues>({ control });

  return (
    <form>
      {schema.map(({ sectionName, sectionDescription, fieldsForm }, index) => (
        <div key={`section_${sectionName ? sectionName : index}`}>
          {sectionName && (
            <div>
              <span>{sectionName}</span>
            </div>
          )}
          {sectionDescription && (
            <div>
              <span>{sectionDescription}</span>
            </div>
          )}
          <div>
            {fieldsForm?.map(
              ({
                name,
                Component,
                defaultValue,
                placeholder,
                fieldContainerStyle,
                fieldInputContainerStyle,
                inputOptions,
                selectOptions,
                maskOptions,
                maskType,
              }) => (
                <TypedController
                  name="test"
                  defaultValue=""
                  key={`field_${name}`}
                  render={(props): JSX.Element => (
                    <div>
                      <div>
                        <Component
                          handleChange={(value: any): void =>
                            props.onChange(value)
                          }
                          maskOptions={maskOptions}
                          maskType={maskType}
                          placeholder={"Placeholder"}
                          inputOptions={inputOptions}
                          selectOptions={selectOptions}
                          {...props}
                        />
                      </div>
                      {errors[name] && <span>{errors[name].message}</span>}
                    </div>
                  )}
                />
              )
            )}
          </div>
        </div>
      ))}
      {children}
      <button onClick={handleSubmit(onSubmit)} />
    </form>
  );
};
