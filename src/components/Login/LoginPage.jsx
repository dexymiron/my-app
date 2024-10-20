import React from "react";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import styles from "./../common/FormsControls/FormsControls.module.scss";
import { reduxForm } from "redux-form";

const LoginPage = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [requiredField], Input)}
      {createField("Password", "password", [requiredField], Input, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} alt="captcha" />}

      {captchaUrl &&
        createField(
          "Symbols from image",
          "captcha",
          [requiredField],
          Input,
          {}
        )}

      {error && <div className={styles.formSummaryError}>{error} </div>}
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
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
