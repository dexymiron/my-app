import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./../common/FormsControls/FormsControls.module.css";

const LoginPage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          component={Input}
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[requiredField]}
          type={"password"}
        />
      </div>
      <div>
        <Field
          validate={[requiredField]}
          type={"checkbox"}
          component={Input}
          name={"rememberMe"}
        />
        Remember me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error} </div>
      )}
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginPage);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
