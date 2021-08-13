import React,{useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions  from '../../store/actions/auth';
// reactstrap components
import classNames from "classnames";
import { LockOutlined} from '@ant-design/icons';
import { Form, InputNumber,Button, Alert, Spin, Space} from 'antd';

// reactstrap components   

import { Redirect } from "react-router-dom";

// core components


export const  TwoFA =  (value) => {
    const [code, setCode] = useState("")
    const [loading, setLoad] = useState(false)
    const [detail, setDetail] = useState(null)
    const [token, setToken] = useState("")
    const error = useSelector(state => state.auth.error)
    const userId = useSelector(state =>  state.auth.userId)
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const innerClasses = classNames(
        'section-inner',
        'has-top-divider',
        'has-bottom-divider'
      );
    const ref = useRef();

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
        if(code){
            setLoad(true)
            dispatch(actions.twoFALogin(code,token))
            setLoad(false)
        }
    }


    React.useEffect(() => {
      window.scrollTo(0, 0)
      
      if (localStorage.getItem('token')){
        const token = localStorage.getItem('token');
        setToken(token)
      }
    }, [token])

    if (userId) {
        return <Redirect to="/user" />
    }
    return (
        <>

            <section>
            <div className={innerClasses}>
            <div className="container">
            <hr/>
            <br/>
    <div className="contx head-cont center-content-mobile center-content ">
      <h2 className="title-head hidden-xs" style={{fontSize:"30px"}}>2FA <span>Authentication</span></h2>
      <p className="info-form">A text Message with your code has been sent to your phone number and email</p>
      {error ?<>
                                            <Alert message={error} type="info" />
                                            <br/>
                                            </>
                                            :
                                            null
                                        }
      
<div className="cont-page">
    <hr/>

      <Form
                    {...formItemLayout} layout={'vertical'}
                    form={form}
                    name="login"
                    onFinish={onSubmit}
                    
                  >

                                        

<Form.Item 
                    name="code"
                          label="Code :"
                          
                        >
                          
                          <InputNumber onChange={(v) => setCode(v)} prefix={<LockOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                                        {loading ?
                                            <Space>
                                                <Spin size="large"/>
                                            </Space>
                                            :
                                            <Button type="primary" size="large" htmlType="submit" className="login-form-button">
          Verify
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

export default TwoFA;
