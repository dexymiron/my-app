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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (<FormControl {...props}>
      <textarea className={styles.postsText} {...input} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (<FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder: string | null,
  name: string,
  validators: Array<FieldValidatorType>,
  component: string | React.Component | React.FC,
  props = {},
  text = ""
) => {
  return (<div className={"createField"}>
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
