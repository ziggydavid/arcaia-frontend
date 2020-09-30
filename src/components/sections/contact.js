import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Col, Row, Card, FormGroup, InputGroup, Button, InputGroupText, InputGroupAddon } from "reactstrap";

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Contact = ({
    className,
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

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
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


                        <Row className="justify-content-center mt--300">
                            <Col lg="8">
                                <Card className="bg-gradient-secondary shadow">
                                    <CardBody className="p-lg-5">
                                        <h4 className="mb-1">Want to work with us?</h4>
                                        <p className="mt-0">
                                            Your project is very important to us.
                      </p>
                                        <FormGroup
                                            className={classnames("mt-5", {
                                                focused: this.state.nameFocused
                                            })}
                                        >
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-user-run" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Your name"
                                                    type="text"
                                                    onFocus={e => this.setState({ nameFocused: true })}
                                                    onBlur={e => this.setState({ nameFocused: false })}
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroupSS
                                            className={classnames({
                                                focused: this.state.emailFocused
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
                                                    onFocus={e => this.setState({ emailFocused: true })}
                                                    onBlur={e => this.setState({ emailFocused: false })}
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Input
                                                className="form-control-alternative"
                                                cols="80"
                                                name="name"
                                                placeholder="Type a message..."
                                                rows="4"
                                                type="textarea"
                                            />
                                        </FormGroup>
                                        <div>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="button"
                                            >
                                                Send Message
                        </Button>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>



                    </div>
                </div>
            </div>
        </section>
    );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;