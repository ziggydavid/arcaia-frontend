import React from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import { UserOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import { Form, Input,Button, Alert, Spin, Space} from 'antd';
// reactstrap components   


function ForgotPass(topDivider,
    bottomDivider,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill) {
    const [email, setEmail] = React.useState("")
    const [errors, setError] = React.useState({})
    const [loading, setLoad] = React.useState(false)
    const [detail, setDetail] = React.useState(null)

   
    
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


    const onSubmit = e => {
      
            setLoad(true)
            axios.post('/password/reset/', {
                email: email
            }).then(res => {
                if (res.data.detail) {
                    setDetail(res.data.detail)
                    setLoad(false)
                }
                if (res.data.error) {
                    setDetail(res.data.error)
                    setLoad(false)
                }
            }).catch(err =>{
              setLoad(false)
              setDetail("Request can't processed at the moment")
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


    return (
        <>
            <section >
                <div className={innerClasses}>

<div className={splitClasses}>

  <div className="split-item">

  </div>

  <div className="container split-item">
    <div className="split-item-content contx  center-content-mobile center-content reveal-from-left"  data-reveal-container=".split-item">
      <h2 className="title-head hidden-xs">Forgot <span>Password</span></h2>
      <p className="info-form">Get instructions in your email to reset your password</p>
{detail?
<>
<Alert message={detail} type="info" /><br/> </> : null}
      <Form
                    {...formItemLayout} layout={'vertical'}
                    form={form}
                    name="register"
                    onFinish={onSubmit}
                    
                    scrollToFirstError
                  >
                      <Form.Item 
                          name="email"
                          label="Email"
                          
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
                          <Input onChange={(e) => setEmail(e.target.value)} prefix={<UserOutlined className="site-form-item-icon" />} />
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
export default ForgotPass;
