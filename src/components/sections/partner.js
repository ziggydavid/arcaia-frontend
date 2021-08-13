import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import { Link} from "react-router-dom"
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Partner = ({
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
        <div className="header-xx banner-area" style={{ backgroundImage: " linear-gradient(rgb(0 0 0 / 75%) 0%, rgb(11 12 12 / 60%) 100%), url(" + require("./../../assets/images/partner.jpg") + ")", backgroundSize: "cover", backgroundPosition: "50%" }}>
          <div className="pad-H">
            <h2 className="title-head text-center">Become an Arcaia<span style={{ color: "#fd961a" }}>&nbsp;Agent</span></h2>

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
                  The Arcaia Agency Program
                  </h3>
                  <p className="m-0">
                  The Arcaia Agency Program is an opportunity to create your own income around our platform.
                    You can Become an Arcaia Agent and earn 5% interest on the contribution of any of your referral  <br />
                    <br />
                    If you’re interested in becoming an Agency Partner, please click the button below:
          
                  </p>
                  <br/>
                  <Link  to="/register"   className="ant-btn ant-btn-primary  login-form-button ">
          Become an Agent
        </Link>
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


    </>
  );
}

Partner.propTypes = propTypes;
Partner.defaultProps = defaultProps;

export default Partner;