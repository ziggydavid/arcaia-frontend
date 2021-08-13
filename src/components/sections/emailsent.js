import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
// reactstrap components
import classNames from "classnames";
import { UserOutlined} from '@ant-design/icons';
import { Form, Input,Button, Alert, Spin, Space} from 'antd';

// reactstrap components   

import { Redirect } from "react-router-dom";

// core components


function EmailSent(topDivider,
    bottomDivider,) {
    let [email, setEmail] = React.useState("")
    const [loading, setLoad] = React.useState(false)
    const [detail, setDetail] = React.useState(null)
    const sent = useSelector(state => state.auth.sent)

    const [form] = Form.useForm();
    const innerClasses = classNames(
        'section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
      );
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
    const onSubmit = e => {
            setLoad(true)
            axios.post('/resend-verification-email/', {
                email: email
            }

            ).then((res) => {
              window.scrollTo(0, 0)
                setDetail(res.data.detail)
                setLoad(false)
            }).catch(err => {
                setTimeout(() => {
                  window.scrollTo(0, 0)
                    setDetail("Your request can't be processed at the moment")
                    setLoad(false)

                }, 2000)

            })
        
    }


    React.useEffect(() => {
      window.scrollTo(0, 0)
        if (localStorage.key("account")) {
            let user = JSON.parse(localStorage.getItem("account"));
            
            if (user) {
                if (user.email) {
                    setEmail(user.email)
                }
            }
        }
    },[sent,email])

    if (!sent) {
        return <Redirect to="/register" />
    }
    return (
        <>

            <section>
            <div className={innerClasses}>
            <div className="container">
            <hr/>
                <br/>
    <div className="contx head-cont center-content-mobile center-content ">
      <h2 className="title-head hidden-xs" style={{fontSize:"30px"}}>Verification Email <span>Sent</span></h2>
      <p className="info-form">Follow the instructions in your email to verify your email</p>
      {detail ?<>
                                            <Alert message={detail} type="info" />
                                            <br/>
                                            </>
                                            :
                                            null
                                        }
                                        <img className="custom-img" src={require('../../assets/images/emailsent.png')} alt="Email Sent" />
<div className="cont-page">
    <hr/>
    <p className="info-form" style={{fontSize:"10px"}}>Didn't get the email?.. resend!</p>
      <Form
                    {...formItemLayout} layout={'vertical'}
                    form={form}
                    name="login"
                    onFinish={onSubmit}
                    
                  >

                                        

<Form.Item 
                          name="email"
                          label="Email"
                         
                        >
                         {email}
                          <Input value={email} prefix={<UserOutlined className="site-form-item-icon" />} />
                          
                        </Form.Item>
                                        {loading ?
                                            <Space>
                                                <Spin size="large"/>
                                            </Space>
                                            :
                                            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
          Resend Email
        </Button>

                                            }
                                    </Form>
                                    </div>
</div>
</div>
                </div>
            </section>
        </>
    );
}

export default EmailSent;
