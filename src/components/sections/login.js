import React,{useState} from "react";
import { Link, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/auth";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { Form, Input,Button, Alert, Space, Spin} from 'antd';
// reactstrap components   

import TwoFA from './2fa';

import { set } from "lodash";

// core components


function LoginPage(  
    topDivider,
    bottomDivider,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill) {

    const dispatch = useDispatch()
    dispatch(actions.authCheckState())
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const twoFA = useSelector(state => state.auth.twoFA)
    const loading = useSelector(state => state.auth.loading)
    const detail = useSelector(state => state.auth.detail)
    const userId = useSelector(state => state.auth.userId)
    const error = useSelector(state => state.auth.error)
    const [logtoken, setToken] = useState(false)

    const {email, password} = formData
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 24,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 24,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 24,
            offset: 0,
          },
        },
      };


      const handleChange = key => e => {
        setFormData({ ...formData, [key]: e.target.value })
    }


    const handleSubmit = e => {
            dispatch(actions.authLogin(email, password));
    }

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );

      
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

    React.useEffect(() => {


        document.body.classList.add("login-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("login-page");
            document.body.classList.remove("sidebar-collapse");
        };



    }, []);


    if (userId) {
      return <Redirect to="/user" />
  }

    return (
        <>
            <section >
                <div className={innerClasses}>

<div className={splitClasses}>

  <div className="split-item">

  </div>
{twoFA?
<TwoFA/>
:
  <div className="container split-item">
    <div className="split-item-content contx contx-login center-content-mobile center-content reveal-from-left"  data-reveal-container=".split-item">
      <h2 className="title-head hidden-xs">MEMBER <span>LOGIN</span></h2>
      <hr/>
      {error ?
                                            <>
                                            <Alert message={error} type="error" />
                                                  <br />
                                            </>
                                            :
                                            null
                                        }
                                        {detail ?
                                            <Alert message={detail.detail} type="error" />

                                        : null}

      <Form
                    {...formItemLayout} layout={'vertical'}
                    form={form}
                    name="register"
                    onFinish={handleSubmit}
                    
                    scrollToFirstError
                  ><Form.Item
                  name="email"
                  label="E-mail"
                  onChange={handleChange('email')}
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input  prefix={<UserOutlined className="site-form-item-icon" />} />
                </Form.Item>
                      

                        <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
        onChange={handleChange('password')}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        

        <Link className="login-form-forgot" to="/forgot-password">
          Forgot password?
        </Link>
      </Form.Item>
      {loading? 
    <Space>
        <Spin size="large"/>
    </Space>  
    :
<Form.Item {...tailFormItemLayout}>
        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <p className="info-form" style={{fontSize:"12px"}}>Don't Have an account? {" "} <span> <Link to="/register" style={{color:"#fd961a"}}> register now!</Link></span></p>

      </Form.Item>
    }
                      </Form>
                          </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <img
                    src={require('./../../assets/images/bg-user-3.jpg')}
                    alt="About us"
                    style={{ width: "75%", marginBottom: "150px" }} />
                </div>
              </div>
    }
            </div>
          </div>
            </section>

        </>
    );
}

export default LoginPage;
