import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

import {
    CardText, Row, Col
} from 'reactstrap';


const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const About = ({
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
        'hero section center-content',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        'background'
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
        title: 'About US',
        paragraph: 'Welcome to Deezisoft'
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

                        <Row>

                            <Col>


                                <CardText className="text-left">Deezisoft is a Nigerian Tech company that offers a variety of tech solutions ranging from Software and Graphics Design, Development and Digital Consultancy services that will help your business and ultimately grow your bottomline.

<h2>Our Mission</h2>
Driven by the desire to develope and bring ideas to life,automate processes, our mission is to continually launch disruptive products that will positively impact on the way customers,users, and people interact with technologies, online businesses, and SAS(software as a service).

<h2>Our Vision</h2>
At Deezisoft, our vision is to help brands, companies, technologies  with unique concepts that meets the industry standard. To use technology to solve basic human problems.</CardText>

                            </Col>

                        </Row>

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

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;