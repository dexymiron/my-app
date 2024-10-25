import React from "react";
import styles from "./FormsControls.module.scss";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
  children: React.ReactNode
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (<div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...restProps }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      <textarea {...input} {...restProps} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...restProps }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={`${styles.formControl} ${hasError ? styles.error : ""}`}>
      <input {...input} {...restProps} />
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};


export const createField = (
  placeholder: string | null,
  name: string,
  validators: Array<FieldValidatorType>,
  component: React.FC<WrappedFieldProps> | string,
  props = {},
  text = ""
) => {
  return (
    <div className={"createField"}>
      <Field
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validators}
        {...props}
      />
      {text}
    </div>
  );
};
export type GetStringKeys<T> = Extract<keyof T, string>
