import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import WarningIcon from '@material-ui/icons/Warning';

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
  pushLeft,
  ...props
}) => {



  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',

  );
  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <div className="header-xx banner-area" style={{ backgroundImage: " linear-gradient(rgb(0 0 0 / 75%) 0%, rgb(11 12 12 / 60%) 100%), url(" + require("./../../assets/images/bg-banner.jpg") + ")", backgroundSize: "cover", backgroundPosition: "50%" }}>
          <div className="pad-H">
            <h2 className="title-head text-center">ABOUT<span style={{ color: "#fd961a" }}>&nbsp;US</span></h2>

          </div>
          <hr className="banner-area-hr" />
          <ul class="breadcrumb">
            <li><a href="/"> Home </a></li>
            <li>About</li>
          </ul>
        </div>
        <div className="container">
          <div className={innerClasses}>

            <div className={splitClasses}>

              <div className="split-item">

              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                  <h3 className="mt-0 mb-12">
                    WE ARE ARCAIA
                  </h3>
                  <p className="m-0">
                    Arcaia Multipurpose Cooperative Society is a Cooperative Society that provides an avenue for its members to come together, pool finances together with the sole purpose of engaging in legal, profitable trades that would enable them earn profit at the end of their contribution cycle. This Organization was borne out of the need to alleviate poverty, empower the weak and vulnerable in the society and get rid of the biting hardship in our nation and the world.   <br />
                    <br />
                  </p>
                  <h3 class="title-about risk-title"><WarningIcon style={{ color: "#fff" }} /> &nbsp; Risk Warning</h3>
                  <p>Forex Trading comes with its Risks.We have our back up Capital and have also put Effective Risk Management Measures in place. However we can Guarantee Our Members their Capital in the event of a negative impact on our Trading.</p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <img
                    src={require('./../../assets/images/about-us.png')}
                    alt="About us"
                    style={{ width: "75%" }} />
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>


      <section className="facts" style={{ padding: "60px 0" }}>

        <div className="container facts-content">
          <div className="text-center heading-facts">
            <h2>Arcaia<span> Numbers</span></h2>
            <p>The Most Effective and Digital Cooperative Society</p>
          </div>
          <div className="row text-center facts-content">


            <div className="col-xs-12 col-md-3 col-sm-6 fact">
              <h3>$50,950</h3>
              <h4>Total Trading Volume</h4>
            </div>

            <div className="col-xs-12 col-md-3 col-sm-6 fact fact-clear">
              <h3>+5.26%</h3>
              <h4>Daily Profit</h4>
            </div>

            <div className="col-xs-12 col-md-3 col-sm-6 fact">
              <h3>30</h3>
              <h4>Active Members</h4>
            </div>

            <div className="col-xs-12 col-md-3 col-sm-6">
              <h3>10</h3>
              <h4>Traders</h4>
            </div>

          </div>

        </div>

      </section>

      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className="title-head-subtitle center-content">
              <h2 class="title-head">The <span>Team</span></h2>
              <p className="hr-effect">Meet the Team Behind Arcaia</p>
            </div>
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <img src={require('./../../assets/images/el.jpg')} alt="El" />

                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-center">
                    <span className="testimonial-item-name text-color-high">PRINCE ELVIS P. DAGANA
</span>
                    <span className="text-color-low"><br /> </span>
                    <span className="testimonial-item-n">
                      Chairman/CEO
                  </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <img src={require('./../../assets/images/Eppeh.png')} alt="El" />
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-center">
                    <span className="testimonial-item-name text-color-high">LUKE EPPEH
</span>
                    <span className="text-color-low"><br /> </span>
                    <span className="testimonial-item-n">
                      Treasurer
                  </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <img src={require('./../../assets/images/Gloria.jpeg')} alt="Gloria" />
                  <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-center">
                    <span className="testimonial-item-name text-color-high">GLORIA BENEDICT</span>
                    <span className="text-color-low"><br /> </span>
                    <span className="testimonial-item-n">
                      Secretary
                  </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;