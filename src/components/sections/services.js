import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Helmet } from 'react-helmet';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const Services = ({
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
        title: 'Innovative  & Streamlined Approach',
        paragraph: 'Our Software Engineering services include Website Development (e-commerce, product landing pages and corporate sites), Mobile Application Development (iOS, Andoid, Hybrid),  as well as App UI/UX design. Our Graphics and creative studio sevices include Graphics Design(Logos, Banner etc.), Video Content Production (Explainers and Informecial), Video Editing, Animation, Motion Graphics'
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <Helmet>
                <meta property="og:image" content="https://deezisoft.com/static/deezilogo.png" />
                <meta name="description" content="Software and Design solutions with Innovative and streamlined approach" />
                <meta property="og:title" content="Software development | Graphics | Video Editing" />
                <meta property="og:description"
                    content="An organization of tech enthusiasts to provide technology based solutions. Ranging form websites/software development, mobile applications, Graphics designs, creatives, video editings, motion graphics etc. We take care of the whole process for you with over 400 successful developments. 100% Guaranteed" />
                <meta property="og:url" content="https://deezisoft.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description"
                    content="An organization of tech enthusiasts to provide technology based solutions. Ranging form websites/software development, mobile applications, Graphics designs, creatives, video editings, motion graphics etc. We take care of the whole process for you with over 400 successful developments. 100% Guaranteed" />
                <meta name="twitter:title" content="Software development | Graphics | Video Editing" />
            </Helmet>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Software Development
                  </div>
                                <h3 className="mt-0 mb-12">
                                    Web Design & Development
                  </h3>
                                <p className="m-0">
                                    we designs and develop responsive and functional websites that are both user and search engine friendly. Over the years, with professional experience in creating bespoke or theme-based WordPress websites, CMS-driven websites, e-commerce websites, and custom landing pages that meet our clients’ specifications. We Build for the mobile-centric web or transform your business to fit in with the modern cross-platform reality. Drawing upon extensive UI/UX and front-end expertise, our web app developers deliver rich user experiences: Functional, convenient and visually compelling HTML5/JavaScript applications that work natively great on all devices.</p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/webdesign.jpg')}
                                    alt="Features split 01"
                                    width={528}
                                    height={396}
                                    style={{ borderRadius: "20px" }} />
                            </div>
                        </div>

                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                                    Graphics Studio
                  </div>
                                <h3 className="mt-0 mb-12">
                                    Creative Studio
                  </h3>
                                <p className="m-0">
                                    We offer multimedia services that cuts across Creative Content Development through to broadcast.
                                    Having started operations as a professional audiovisual outfit,
                                    we have built core competence in Logo Design,Graphic Designs, Animation and Video Editing production, Motion Graphics, UI/UX
                 </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                data-reveal-container=".split-item">
                                <Image
                                    src={require('./../../assets/images/deve.jpg')}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                    style={{ borderRadius: "20px" }} />
                            </div>
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

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;