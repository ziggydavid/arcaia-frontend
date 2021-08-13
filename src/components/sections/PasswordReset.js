import React from "react";
import { Redirect, Link } from "react-router-dom"
import { useParams } from "react-router"
import axios from "axios";
// reactstrap components
import classNames from 'classnames';
import {LockOutlined } from '@ant-design/icons';
import { Form, Input,Button, Alert, Spin, Space} from 'antd';


// core components


function PassReset(topDivider,
    bottomDivider,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill) {
    const [password, setpassword] = React.useState(false);
    const [password2, setpassword2] = React.useState(false);
    const [loading, setLoad] = React.useState(false)
    const [detail, setDetail] = React.useState(null)
    const [info, setInfo] = React.useState(null)
    const [redirect, setRedirect] = React.useState(null)

    let { token } = useParams()
    let { uid } = useParams()

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

     
     
    const onSubmit = () => {
       
            setLoad(true)
            axios.post('/rest-auth/password/reset/confirm/', {
                new_password1: password,
                new_password2: password2,
                uid: uid,
                token: token,
            }

            ).then((res) => {
                if (res.status === 200) {
                    setDetail(res.data.detail)
                    setLoad(false)

                    setTimeout(() => {
                        setLoad(true)
                        setInfo(true)
                    }, 2000)
                    setTimeout(() => {
                        setRedirect(true)
                        setLoad(true)

                    }, 5000)
                }
               
            }).catch(err => {
              if (err.response.data.new_password2){
                
                    setDetail(err.response.data.new_password2[0])  
                    setLoad(false)
            }else if(err.response.data.new_password1){
                
                    setDetail(err.response.data.new_password1[0])  
                    setLoad(false)
                }

                else setTimeout(() => {
                    setDetail("Link Broken")
                    setLoad(false)
                }, 2000)

            })
        
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
    if (redirect) {
        return <Redirect to="/login" />;
    }


    return (
        <>

            <section >
                <div className={innerClasses}>

<div className={splitClasses}>

  <div className="split-item">

  </div>

  <div className="container split-item">
    <div className="split-item-content contx  center-content-mobile center-content reveal-from-left"  data-reveal-container=".split-item">
      <h2 className="title-head hidden-xs">New <span>Password</span></h2>
      <p className="info-form">Enter a new password</p>

      {info ?
                                            <Alert message="Redirecting to Login...." type="success"/>
                                            :
                                            detail && (<Alert message={detail} type="success" />)
                                        }


                                      
                                        <br />
                                        <Form
                    {...formItemLayout} layout={'vertical'}
                    form={form}
                    name="PasswordReset"
                    onFinish={onSubmit}
                    
                    scrollToFirstError
                  >
                      <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                            { min: 8, message: 'password must be minimum 8 characters.' },
                            () => ({
                              validator(_, value) {
                                if (value.match('(?=.*?[0-9])')) {
                                  return Promise.resolve();
                                }
    
                                return Promise.reject(new Error('password must contain at least one digit'));
                              }}),
                          ]}
                          hasFeedback
                        >
                          <Input.Password onChange={e => setpassword(e.target.value)} prefix={<LockOutlined className="site-form-item-icon" />}  />
                        </Form.Item>
                     
                                      <Form.Item
                          name="confirm"
                          label="Confirm Password"
                          dependencies={['password']}
                          hasFeedback
                          rules={[
                            {
                              required: true,
                              message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                  return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                              },
                            }),
                          ]}
                        >
                          <Input.Password onChange={e => setpassword2(e.target.value)} prefix={<LockOutlined className="site-form-item-icon" />}/>
                        </Form.Item>


                        {loading?
<Space>
    <Spin size="large"/>
</Space>:
<Form.Item {...tailFormItemLayout}>
    <br/>
        <Button type="primary" size="large" htmlType="submit" className="login-form-button">
          Reset
        </Button>
        
      </Form.Item>}
                                       </Form>
                                


                                </div>
                                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <img
                    src={require('./../../assets/images/lock.png')}
                    alt="About us"
                    style={{ width: "75%", marginBottom: "150px" }} />
                </div>
                            </div>
                        </div>
                        </div>
            </section>
        </>
    );
}

export default PassReset;
