import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import HomeIcon from '@material-ui/icons/Home';
import axios from "axios";
import { Form, Input, Button,Alert } from 'antd';
import Icon from '@material-ui/core/Icon';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Contact = ({

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
}) => {


    const [nameFocused, setNameF] = React.useState(false)
    const [telFocused, setTelF] = React.useState(false)
    const [emailFocused, setEmailF] = React.useState(false)
    const [companyFocused, setCompanyF] = React.useState(false)
    const [name, setName] = React.useState("")
    const [tel, setTel] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [errors, setError] = React.useState({})
    const [message, setMessage] = React.useState("")
    const [loading, setLoad] = React.useState(false)

    const [msg, setMsg] = React.useState()
    const onFinish = (values) => {
        console.log(values);
      };
    const handleName = e => {
        setNameF(false)
        let formValid = true
        let err = {}
        if (!name) {
            formValid = false
            err['name'] = "Name cannot be empty"
        }

        setError(err)
        return formValid
    }

    const handleMessaage = e => {

        let formValid = true
        let err = {}
        if (!message) {
            formValid = false
            err['message'] = "Message cannot be empty"
        }

        setError(err)
        return formValid
    }

    const handleTel = e => {
        setTelF(false)
        let formValid = true
        let err = {}
        if (!tel) {
            formValid = false
            err['tel'] = "Number cannot be empty"
        }

        setError(err)
        return formValid
    }

    const handleEmail = e => {
        setEmailF(false)
        let err = {}
        let formValid = true;
        //Email
        if (!email) {
            formValid = false;
            err["email"] = "Email cannot be empty";
        }

        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formValid = false;
                err["email"] = "Email is not valid";
            }
        }
        setError(err)
        return formValid;
    }

    const checkForm = e => {
        let formValid = true
        let err = {}
        if (!name) {
            formValid = false
            err['name'] = "Name cannot be empty"
        }

        if (!message) {
            formValid = false
            err['message'] = "message cannot be empty"
        }
        if (!tel) {
            formValid = false
            err['tel'] = "number cannot be empty"
        }

        if (!email) {
            formValid = false;
            err["email"] = "Email cannot be empty";
        }

        if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formValid = false;
                err["email"] = "Email is not valid";
            }
        }

        setError(err)
        return formValid;
    }

    const submitForm = e => {
        e.preventDefault()
        setLoad(true)
        if (checkForm()) {
            const user = {
                name: name,
                email: email,
                company: company,
                phone: tel,
                message: message
            }
            axios.post('/contact-now/', user)
                .then(res => {
                    setMsg(res.data.success)
                    setLoad(false)

                }).catch(err => {
                    setMsg("Sorry Your message can't be processed at the moment. ")
                    setLoad(false)
                })
        }
        else {
            checkForm()
            setLoad(false)
        }
    }
    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        "background"
    );

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

    const sectionHeader = {
        title: 'Get in Touch',
        paragraph: "Let's Discuss your project"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
<div className="header-xx banner-area" style={{ backgroundImage: " linear-gradient(rgb(0 0 0 / 75%) 0%, rgb(11 12 12 / 60%) 100%), url(" + require("./../../assets/images/bg-banner.jpg") + ")", backgroundSize: "cover", backgroundPosition: "50%" }}>
          <div className="pad-H">

          
            <h2 className="title-head text-center">GET IN<span style={{ color: "#fd961a" }}>&nbsp;TOUCH</span></h2>

          </div>
          <hr className="banner-area-hr" /> 
          <ul className="breadcrumb center-content">
            <li><a href="/"> Home </a></li>
            <li>CONTACT</li>
          </ul>
        </div>
            <div className="container">
            
                <div className={innerClasses}>
                <div className={splitClasses}>
                <div className="split-item">
                
                <div className="cont-form  center-content-mobile reveal-from-left" data-reveal-container=".split-item">
       
                                <div className="contact-form">
                               
                {msg ?<>
                                            <Alert message={msg} type="info" />
                                            <br/>
                                            </>
                                            :
                                            null
                                        }
                                        <hr/>
                                        <br/>       
                                <h3 >feel free to drop us a message</h3>
                                <p >Need to speak to us? Do you have any queries or suggestions? Please contact us about all enquiries including membership using the form below.</p>
                                <Form layout={'vertical'} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item
                                  name={['user', 'name']}
                                  label="Name"
                                  rules={[
                                    {
                                      required: true,
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  name={['user', 'email']}
                                  label="Email"
                                  rules={[
                                    {
                                      type: 'email',
                                    },
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item name={['user', 'introduction']} label="Introduction">
                                  <Input.TextArea />
                                </Form.Item>
                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 0 }}>
                                  <Button type="primary" htmlType="submit">
                                    Submit
                                  </Button>
                                </Form.Item>
                              </Form>
                             
                                </div>
                        </div>
                        <div
                  data-reveal-container=".split-item">
                         
    <div className="widget">
                            <div className="contact-page-info">
								
                                <div className="contact-info-box">
                                <HomeIcon className="big-icon" style={{color:"#fd961a"}}/>
                               
                                    <div className="contact-info-box-content">
                                    
                                        <h4>Address</h4>
                                        <p>KM 5 Isaac BORO Expressway (Pink Building Adjacent or on the other side of Air force, Beside Redeemed Church), <br/> Okaka Yenagoa Bayelsa State
</p>
                                    </div>
                                </div>
								
								
                                <div className="contact-info-box">
                                    <PhoneIcon  className="big-icon" style={{color:"#fd961a"}}></PhoneIcon>
                                    <div className="contact-info-box-content">
                                        <h4>Phone Numbers</h4>
                                        <p>0806 051 5498 (Calls)<br/>+234 906 324 5710 (whatsapp)</p>
                                    </div>
                                </div>
								
								
                                <div className="contact-info-box">
                                <EmailIcon  className="big-icon" style={{color:"#fd961a"}}></EmailIcon>
                                    <div className="contact-info-box-content">
                                        <h4>Email Address</h4>

                                        <p>hello@arcaiacooperative.org</p>
                                    </div>
                                </div>
								
							
                                <div className="contact-info-box">
                                <ShareIcon  className="big-icon" style={{color:"#fd961a"}}></ShareIcon>
                                    <div className="contact-info-box-content">
                                        <h4>Social Profiles</h4>
                                        <div className="social-contact">
                                            <ul>
                                                <li className="facebook"><a href="https://www.facebook.com/arcaiacooperative" target="_blank"><FacebookIcon className="ix" fontSize="small"/>{" "}</a></li>
                                                <li><a href="https://www.instagram.com/arcaiacooperative" target="_blank">{"  "}<InstagramIcon className="ix" fontSize="small"/></a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
							
                            </div>
                        </div>
</div>
    </div>
                        </div>
            </div>
            </div>
          

        </section>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;