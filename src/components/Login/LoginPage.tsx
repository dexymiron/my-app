import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import n from "./LoginPage.module.scss";
import type { FormProps } from 'antd';
import { AppDispatch, AppStateType } from "../../redux/redux-store";

type FieldType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: null
};


const LoginPage: React.FC = () => {

  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)

  const dispatch: AppDispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    setLoading(true);
    await dispatch(login(
      values.email,
      values.password,
      values.rememberMe,
      values.captcha ?? null,
    ));
    setLoading(false);
  };
  



  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={n.LoginPage}>
      <h1 className={n.loginPageText}>Login Page</h1>
      <div className={n.formContainer}>
        <Form
          name="login_form"
          layout="vertical"
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
              //{ type: "email", message: "The input is not valid E-mail!" },
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
              { min: 4, message: "Min length 4 symbols" },
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

          {/* {error && <div className={n.formSummaryError}>{error}</div>} */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className={n.loginBtn}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;

