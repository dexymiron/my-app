import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import n from "./LoginPage.module.scss";
import type { FormProps } from 'antd';
import { AppStateType } from "../../redux/redux-store";

type FieldType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: null
};

type MapStateToPropsType = {
  captchaUrl: string | null
  isAuth: boolean
  error?: string | null;
}

type MapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: null) => Promise<void>;
  
}


const LoginPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({ error, captchaUrl, isAuth, login }) => {
  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setLoading(true);
    await login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha ?? null
    );
    setLoading(false);
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <Form
        name="login_form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ rememberMe: true }}
        onFinish={onFinish}
        className={n.form}
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          hasFeedback
          rules={[
            { required: true, message: "Please input your email!" },
            { max: 50, message: "Max length 50 symbols..." },
            { type: "email", message: "The input is not valid E-mail!" },
          ]}
        >
          <Input className={n.emailInput} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          hasFeedback
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Min length 6 symbols" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="rememberMe"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {captchaUrl && (
          <>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <img src={captchaUrl} alt="captcha" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Captcha"
              name="captcha"
              rules={[{ required: true, message: "Please input captcha!" }]}
            >
              <Input />
            </Form.Item>
          </>
        )}

        {error && <div className={n.formSummaryError}>{error}</div>}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className={n.loginBtn}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginPage);
