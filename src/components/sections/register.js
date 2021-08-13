import React, { useState} from 'react';
import { Form, Input, InputNumber, Select, Row, Col, Card, Checkbox, Button, AutoComplete } from 'antd';
import classNames from 'classnames';
import { Redirect, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/auth";
import Camera from 'react-html5-camera-photo';
import PhoneInput from 'react-phone-number-input'
import axios from "axios";
import ImgCrop from 'antd-img-crop';
import { Upload, Alert,Spin, Space, Modal } from 'antd';
import EmailSent from './emailsent'

import { UploadOutlined } from '@ant-design/icons';

const onPreview = async file => {
  let src = file.url;
  if (!src) {
    src = await new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
    });
  }
  const image = new Image();
  image.src = src;
  const imgWindow = window.open(src);
  imgWindow.document.write(image.outerHTML);
};


// reactstrap components

// reactstrap components   


// core components


function RegisterPage({

  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    first: "",
    last: "",
    address: "",
    picture: "",
    state: "",
    city: "",
    signature: "",
    password: "",
    password2: "",
    account_number: "",
    account_name: "",
    code: "",
})

  const {username,email,phone,first,last,address,picture,signature,state,city,password,password2, code,account_name, account_number} = formData
  const[bank_name, setBankName] = useState("")
  const[msg, setmsg] = useState("")
  const[msgErr, setmsgErr] = useState("")
  const loading = useSelector(state => state.auth.loading)
  const userId = useSelector(state => state.auth.userId)
  const error = useSelector(state => state.auth.sev)
  const sent = useSelector(state => state.auth.sent)
  const [serverLoading, setServerLoading] = useState(false)
  const [form] = Form.useForm();
  const handleChange = key => e => {
    setFormData({ ...formData, [key]: e.target.value })

}
const[phoneloading, setphoneloading] = useState(false)
const [phoneErr, setPhoneErr] = useState("")
const [verifiedPhone, setverifiedPhone] = useState(false)
const [cnum, setCnum] = useState("")
const [isModalVisible, setIsModalVisible] = useState(false);
const [phonecode, setphoneCode] = useState("")
const [showform, setshowForm] = useState(false)
const [progress, setProgress] = useState(0)
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setmsg("")
    setmsgErr("")
  };


  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("image", file);
    setFormData({...formData, picture : file})
    onSuccess("Ok");
  };

  const uploadSig = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("image", file);
    setFormData({...formData, signature:file})
    onSuccess("Ok");
  };

  

    // you store them in state, so that you can make a http req with them later

  

  const handleSubmit = () => {
      dispatch(actions.authSignup(username, email, password, password2, first, last, state, city, address, phone, picture, signature));
    }

  const { Option } = Select;


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

  const register = () => {
    dispatch(actions.authSignup(username, email, password, password2, first,state, city, address, phone, picture, signature,code,bank_name, account_name, account_number));
  }
  const confirmPhone = (phone) => {
    if(cnum !== phone || verifiedPhone === false) {
      setServerLoading(true)
      showModal()
    axios.post("/phonerequest/",{phone}).then(res => {
      const {success, key, error} = res.data
      if(success){
        
        setmsg(success)
        setCnum(phone)
        setServerLoading(false)
        setshowForm(true)
        localStorage.setItem('binkey', `${key}`);
      }
      if(error){
        setmsgErr(error)
        setshowForm(false)
        setServerLoading(false)
      }
  }).catch(err => {
    handleCancel()
    setServerLoading(false)
    
  })}
else{
register()
}
}

const verifyPhone = () => {
  setphoneloading(true)
  const bin_key = localStorage.getItem('binkey');
  axios.post("/phoneverifyrequest/",{phonecode,bin_key}).then(res => {
      const {success,  error} = res.data
      if(success){
        handleCancel()
        setverifiedPhone(true)
        setphoneCode("")
        setphoneloading(false)
     register()
      }
      if(error){
        setmsgErr(error)
        setphoneloading(false)
      }
  }).catch(err => {
    setphoneloading(false)
    console.log(err.response.data)
  })
}
  const onFinish = (values) => {
    register()
    //confirmPhone(phone)


  };

  const checkPhone = () => {
    
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

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log(dataUri);
  }

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
<Modal title="Phone Number Verification" visible={isModalVisible} onCancel={handleCancel} footer={[
            
          ]}>
<div className="contx head-cont center-content-mobile center-content ">
      <h2 className="title-head hidden-xs" style={{fontSize:"20px"}}><span style={{color:"#393636"}}>Confirm {" "}</span><span> Phone Number</span></h2>
      <p className="info-form">{msg}</p>
      {msgErr ?<>
                                            <Alert message={msgErr} type="error" />
                                            <br/>
                                            </>
                                            :
                                            null
                                        }
      {serverLoading?
      <Space>
      <Spin size="large"/>
  </Space>
      :

     <>
      {showform?
      <>                                      

<Form.Item 
                    name="code"
                          label="Code"
                          
                        >
                          
                          <InputNumber onChange={(v) => setphoneCode(v)}/>
                        </Form.Item>
                                       
                                       
                                        {phoneloading ?
                                            <Space>
                                                <Spin size="large"/>
                                            </Space>
                                            :
                                            <Button type="primary"  onClick={() => verifyPhone()} className="login-form-button">
          Verify
        </Button>

                                            }
                                  </>: null}

</>
}
                        
  </div>
      </Modal>
      <section >
      
        <div className="">
        {!sent?
        <div className={innerClasses}>

        <div className={splitClasses}>

          <div className="split-item">
          </div>
          <div className="container split-item">
            <div className="" data-reveal-container=".split-item">
              <h2 className="title-head hidden-xs" style={{textAlign:"center"}}>get <span>started</span></h2>
          <hr/>

              <Form
                {...formItemLayout} layout={'vertical'}
                form={form} 
                name="register"
                onFinish={onFinish}
                scrollToFirstError={true}
              >
          {error ?
                                        <>
                                        <Alert message={error.detail} type="error" />
                                              <br />
                                        </>
                                        :
                                        null
                                    }

                <Row>
                
                
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      onChange={handleChange('first')}
                      name="first"
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Full Name',
                        },
                      ]}
                    >
                      <Input   />
                    </Form.Item>
                  </Col>
                  

                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      name="username"
                      label="Username"
                      onChange={handleChange('username')}
                      tooltip="What do you want others to call you?"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your username!',
                          whitespace: false,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
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
                      <Input />
                    </Form.Item>
                  </Col>
               
                

                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      name="password"
                      label="Password"
                      onChange={handleChange('password')}
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
                          },
                        }),
                        
                      ]}
                      hasFeedback
                    >
                      <Input.Password />
                    </Form.Item>
                  </Col>
                  </Row>
                <Row>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      onChange={handleChange('password2')}
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
                      <Input.Password />
                    </Form.Item>
                  </Col>
                
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    
                    <Form.Item
                    
                      name="number"
                      label="Phone (e.g 0810...)"
                      rules={[
                       
                        {
                          validator: async (rule, x=phone) => {
                            
                            if(!x){
                              throw new Error('Please input your Phone Number');
                            } 
                          }
                          
                        },
                      ]}>

<PhoneInput
defaultCountry="NG"
      placeholder="Enter phone number"
      value={phone}
      onChange={value => setFormData({...formData, phone:value}) }
      onBlur={() => {
        if(!phone){
        setPhoneErr(true)
        }else{
          setPhoneErr(false)
        }
      }}
      />
  )
  {phoneErr === true?
  <small style={{color: "#ff4d4f",fontSize:"14px"}}>Input your phone number</small>
  : null}
                    </Form.Item>
                  </Col>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      name="state"
                      label="State"
                      onChange={handleChange('state')}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your State'
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                

                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                  <Form.Item
                      name="city"
                      label="City"
                      onChange={handleChange('city')}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your City'
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  </Row>
                <Row>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                  <Form.Item
                  name="address"
                  label="Address"
                  onChange={handleChange('address')}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your address'
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
             
                  </Col>
                
                
                
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      
                      name="bank"
                      label="Bank Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Bank Name',
                        },
                      ]}
                    >
                      
                      <Select onChange={v => setBankName(v)} showSearch filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    defaultValue="Choose Bank" className="omo">
                                                        <Option value="access">Access Bank</Option>
          <Option value="citibank">Citibank</Option>
          <Option value="diamond">Diamond Bank</Option>
          <Option value="ecobank">Ecobank</Option>
          <Option value="fidelity">Fidelity Bank</Option>
          <Option value="firstbank">First Bank</Option>
          <Option value="fcmb">First City Monument Bank (FCMB)</Option>
          <Option value="gtb">Guaranty Trust Bank (GTB)</Option>
          <Option value="heritage">Heritage Bank</Option>
          <Option value="keystone">Keystone Bank</Option>
          <Option value="polaris">Polaris Bank</Option>
          <Option value="providus">Providus Bank</Option>
          <Option value="stanbic">Stanbic IBTC Bank</Option>
          <Option value="standard">Standard Chartered Bank</Option>
          <Option value="sterling">Sterling Bank</Option>
          <Option value="suntrust">Suntrust Bank</Option>
          <Option value="union">Union Bank</Option>
          <Option value="uba">United Bank for Africa (UBA)</Option>
          <Option value="unity">Unity Bank</Option>
          <Option value="wema">Wema Bank</Option>
          <Option value="zenith">Zenith Bank</Option>
          <Option value="Kuda Bank">Kuda Bank</Option>
    </Select>
                    
                    </Form.Item>
                  </Col>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      name="account_number"
                      label="Account Number"
                      onChange={handleChange('account_number')}
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Account Number',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
               
                
                
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item
                      onChange={handleChange('account_name')}
                      name="account_name"
                      label="Account Name"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Account Name',
                        },
                      ]}
                    >
                      <Input/>
                    </Form.Item>
                    </Col>
                    </Row>
                <Row>
                    <Col xs={24} xl={6} style={{ padding: "10px" }}>
                <Form.Item
                      name="code"
                      label="Got a referral code? (optional)"
                      onChange={handleChange('code')}
                      
                    >
                      <Input />
                    </Form.Item>
                    </Col>
                    
                  <Col xs={24} xl={6} style={{ padding: "10px" }}>
                    <Form.Item label="Upload a picture of yourself"
                    rules={[
                      {
                        required: true,
                        message: 'Please upload your selfie'
                      },
                    ]}>
                      <ImgCrop rotate>
                        <Upload
                          
                          listType="picture"
                          onPreview={onPreview}
                          defaultFileList={picture}
                          customRequest={uploadImage}
                          maxCount={1}
                          
                        >

                          <Button icon={<UploadOutlined />}>  Upload Selfie</Button>
                        </Upload>
                      </ImgCrop>
                    </Form.Item>
                  </Col>
                  <Col xs={24} xl={6} style={{ padding: "10px" }}><Form.Item label="Upload a picture of your signature"
                    tooltip="Sign on a white piece of paper and upload a clear picture of it">
                    <ImgCrop rotate>
                      < Upload
                        
                        listType="picture"
                        onPreview={onPreview}
                        defaultFileList={signature}
                        customRequest={uploadSig}
                        maxCount={1}
                      >


                        <Button icon={<UploadOutlined />}>Upload signature</Button>
                      </Upload>
                    </ImgCrop>
                  </Form.Item>
                  </Col>
                </Row>
              
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>
                    I have read the <Link style={{color: "#fd961a"}} to="/Agreement">agreement</Link>
                  </Checkbox>
                  
                </Form.Item>
                <Form.Item
                  name="verify"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Check all boxes')),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox style={{color: "#deb887"}}>
                  I Have gone through my details(Bank,phone number etc.) very well.
                  </Checkbox>
                 
                </Form.Item>
                <br/>
                {loading?
              <Space size="middle">
              <Spin size="large" />
            </Space> 
              :
                <Form.Item {...tailFormItemLayout}>
                  {picture.length <= 0 || signature.length <= 0 ? 
                  <Button type="primary" size="large" disabled>
                  CREATE ACCOUNT
           </Button> :
 <Button type="primary" size="large" htmlType="submit">
                    CREATE ACCOUNT
    </Button>}
                </Form.Item>
}
              </Form>
              
            </div>
      
          </div>

        </div>
      </div>
:
<EmailSent/>
}
        </div>

      </section>
    </>
  );
}

export default RegisterPage;
