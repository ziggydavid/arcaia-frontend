import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Col, Row, FormGroup, InputGroup, Button, InputGroupText, InputGroupAddon, Input } from "reactstrap";
import classnames from "classnames";
import axios from "axios";

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

            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>

                        <div className="container">
                            <Row className="justify-content-center mt--300">
                                <Col lg="8">
                                    <div >
                                        <div className="p-lg-5">
                                            <h4 className="mb-1">Want to work with us?</h4>
                                            <p className="mt-0">
                                                Your project is very important to us.
                                              </p>
                                            {msg ?
                                                <Row>
                                                    <Col md="12"><div className="notify notify-lg" style={{ marginBottom: "30px" }}>{msg}</div>
                                                    </Col>
                                                </Row>
                                                :
                                                null}
                                            <Row>
                                                <Col md="6">

                                                    <FormGroup
                                                        className={classnames({
                                                            focused: nameFocused
                                                        })}
                                                    >

                                                        <InputGroup className="input-group-alternative">

                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-single-02" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Your name"
                                                                type="text"
                                                                onChange={e => setName(e.target.value)}
                                                                onFocus={e => setNameF(true)}
                                                                onBlur={e => handleName(e)}
                                                            />
                                                        </InputGroup>

                                                    </FormGroup>
                                                    {errors['name'] ? <p>{errors['name']}</p> : null}
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup
                                                        className={classnames({
                                                            focused: telFocused
                                                        })}
                                                    >
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-mobile-button" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Contact Number"
                                                                type="tel"
                                                                onChange={e => setTel(e.target.value)}
                                                                onFocus={e => setTelF(true)}
                                                                onBlur={e => handleTel(e)}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    {errors['tel'] ? <p>{errors['tel']}</p> : null}
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col md="6">
                                                    <FormGroup
                                                        className={classnames({
                                                            focused: emailFocused
                                                        })}
                                                    >
                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-email-83" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Email address"
                                                                type="email"
                                                                onChange={e => setEmail(e.target.value)}
                                                                onFocus={e => setEmailF(true)}
                                                                onBlur={e => handleEmail(e)}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                    {errors['email'] ? <p>{errors['email']}</p> : null}
                                                </Col>
                                                <Col md="6">
                                                    <FormGroup
                                                        className={classnames({
                                                            focused: companyFocused
                                                        })}
                                                    >

                                                        <InputGroup className="input-group-alternative">
                                                            <InputGroupAddon addonType="prepend">
                                                                <InputGroupText>
                                                                    <i className="ni ni-single-copy-04" />
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                            <Input
                                                                placeholder="Company(optional)"
                                                                type="text"
                                                                onChange={e => setCompany(e.target.value)}
                                                                onFocus={e => setCompanyF(true)}
                                                                onBlur={e => setCompanyF(false)}
                                                            />
                                                        </InputGroup>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <FormGroup className="mb-4">
                                                <Input
                                                    className="form-control-alternative"
                                                    cols="80"
                                                    name="name"
                                                    placeholder="Your Project Detail..."
                                                    rows="4"
                                                    type="textarea"
                                                    onChange={e => setMessage(e.target.value)}
                                                    onBlur={e => handleMessaage(e)}
                                                />
                                            </FormGroup>
                                            {errors['message'] ? <p>{errors['message']}</p> : null}
                                            <div>
                                                <Button
                                                    block
                                                    className="btn-round"
                                                    color="default"
                                                    size="lg"
                                                    type="button"
                                                    onClick={e => submitForm(e)}
                                                >
                                                    {loading === true ?
                                                        <div class="lds-ellipsis" style={{ textAlign: "center" }} ><div></div><div></div><div></div><div></div></div>
                                                        :
                                                        <span>Send Message</span>
                                                    }
                                                </Button>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                    </div>
                </div>
            </div>
            <div className="fixedsocial  floating">
                <div className="facebookflat">
                    <a href="https://wa.me/2349076277509"><img src={require("../../assets/images/whatsapp.svg")} alt="..." /></a>
                </div>
            </div>

        </section>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;