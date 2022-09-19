import React, { useState } from 'react';
import * as Yup from 'yup';
import { Button, Row, Col, Alert } from 'antd';
import { Formik, Form, Field } from 'formik';
import { SubmitButton } from 'formik-antd';
import { Link } from 'react-router-dom';

import { AntInput, AntPassword, AntCheckBox } from '../common/CreateAntField';

import './FanSignupForm.scss';

const signupSchema = Yup.object({
  name: Yup.string().min(4).max(40).required(),
  username: Yup.string().min(3).max(15).required(),
  email: Yup.string().email().max(40).required(),
  password: Yup.string().min(6).max(20).required(),

  // remberMe: Yup.boolean().oneOf([true, false]),
});

const FanSignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function validateRequired(value) {
    return value ? undefined : 'Required';
  }

  return (
    <div id="loginForm">
      <Alert
        style={{ display: errorMessage !== '' ? '' : 'none' }}
        message={errorMessage}
        type="error"
        showIcon
        closable
      />

      <Alert
        style={{ display: successMessage !== '' ? '' : 'none' }}
        message={successMessage}
        type="success"
        showIcon
        closable
      />
      <Formik
        initialValues={{
          name: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          remberMe: false,
        }}
        validationSchema={signupSchema}
        onSubmit={async (values, actions) => {
          setLoading(true);
          // try {
          //   const { email, password } = values;

          //   await auth.login(email, password);
          //   window.location = "/home";
          //   //   const { state } = this.props.location;
          //   //   window.location = state ? state.from.pathname : "/";
          //   setLoading(false);

          //   actions.resetForm();
          // } catch (e) {
          //   if (e.response || e.response.data === 400) {
          //     setErrorMessage(e.response.data.error);
          //     setLoading(false);
          //   }
          // }
          // actions.setSubmitting(false);
        }}
        validate={(values) => {
          if (!values.email) {
            return { email: 'Required' };
          }
          return {};
        }}
      >
        {({ handleSubmit, submitCount, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              component={AntInput}
              name="name"
              type="text"
              label="Full Name"
              placeholder="Your Full Name"
              submitCount={submitCount}
              className="inputStyles"
              hasFeedback
            />
            <Field
              component={AntInput}
              name="username"
              type="text"
              label="Username"
              placeholder="username"
              submitCount={submitCount}
              className="inputStyles"
              hasFeedback
            />
            <Field
              component={AntInput}
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              submitCount={submitCount}
              className="inputStyles"
              hasFeedback
            />
            <Field
              component={AntPassword}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              validate={validateRequired}
              submitCount={submitCount}
              className="inputStyles"
              style={{}}
              hasFeedback
            />
            <Field
              component={AntInput}
              name="bio"
              type="text"
              label="Bio"
              placeholder="Bio"
              submitCount={submitCount}
              className="inputStyles"
              hasFeedback
            />
            <Row justify="space-between" align="middle">
              <Col>
                <Row align="middle">
                  <Field
                    component={AntCheckBox}
                    name="remberMe"
                    submitCount={submitCount}
                    className="inputStyles"
                    style={{}}
                  />
                  <h4 className="textLabels">Remember Me</h4>
                </Row>
              </Col>
              <Col>
                <h4 className="textLabels">
                  <Link to="/">Forgot Password?</Link>
                </h4>
              </Col>
            </Row>
            <SubmitButton
              htmlType="submit"
              style={{ borderRadius: '7px', background: '#4566E0' }}
              type="primary"
              loading={loading ? true : false}
              disabled={isSubmitting}
              block
            >
              Sign up
            </SubmitButton>
          </Form>
        )}
      </Formik>

      <h3 style={{ margin: '1.4rem 0', textAlign: 'center' }}>Continue with</h3>

      <Row justify="center">
        <Col span={4} className="socialIcons">
          <img src="/photos/facebook (1).svg" alt="facebook-icon" />
        </Col>
        <Col span={4} className="socialIcons">
          <img src="/photos/google-plus.svg" alt="Google-icon" />
        </Col>
        <Col span={4} className="socialIcons">
          <img src="/photos/apple.svg" alt="apple-icon" />
        </Col>
      </Row>
    </div>
  );
};

export default FanSignupForm;
