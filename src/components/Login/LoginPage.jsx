import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginPage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"} />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={"input"}
          type={"password"}
        />
      </div>
      <div>
        <label>
          <Field type="checkbox" component={"input"} name={"rememberMe"} />
          Remember me
        </label>
      </div>
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
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
