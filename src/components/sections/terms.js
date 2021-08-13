import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}



const Terms = ({
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

 

  return (
    <>
      <section
        {...props}
        className={outerClasses}
      >
        
        <div className="header-xx banner-area" style={{ backgroundImage: " linear-gradient(rgb(0 0 0 / 75%) 0%, rgb(11 12 12 / 60%) 100%), url(" + require("./../../assets/images/bg-banner.jpg") + ")", backgroundSize: "cover", backgroundPosition: "50%" }}>
          <div className="pad-H">
            <h2 className="title-head text-center">TERMS OF  <span style={{ color: "#fd961a" }}>&nbsp;SERVICE</span></h2>

          </div>
          <hr className="banner-area-hr" /> 
          <ul className="breadcrumb">
            <li><a href="/"> Home </a></li>
            <li>TERMS OF SERVICE</li>
          </ul>
        </div>
        <div className="container" style={{textAlign:"left"}}>
				<div className="row">
					<div className="col-xs-12">
          <div className="container">
        <div style={{paddingLeft:"30px"}}>
						<h3>Voluntary Membership</h3>
						<p>Arcaia Multipurpose Cooperative Society does not coerce, cajole or persuade Prospective Members to join us. Members join of their own Volition.</p>
						<h3>Voluntary Contribution</h3>
						<p>Arcaia Multipurpose Cooperative Society does not coerce, cajole or persuade Prospective Members to make Contributions. Members make Contributions of their own Volition.</p>
						<h3>Member Input Errors</h3>
						<p>It is the sole responsibility of Members to check the accuracy of information entered and saved during Registration.    As such Members must ensure their personal and bank information they enter is completely correct.</p>
						<h3>Risk Notice</h3>
						<p>Forex Trading is a Risky Endeavour. Arcaia Multipurpose Cooperative Society has its Back-Up Capital and has put Effective Risk Management Meassures to mitigate Risk. However in the event of negative impact on our Trading, Members are Guaranteed their Contributions back.</p>
						<h3>Registration and Payment Terms</h3>
						<p>Our Payments for Registration and Contribution are strictly by Transfer. Registration is strictly online using links which we will provide to Prospective Members. For Prospective Members who are unable to complete their Registration Online, We have Staff on-site to provide Guidance.</p>
						<h3>Security</h3>
						<p>We have implemented security measures designed to secure your information from accidental loss and from unauthorized access, use, alteration or disclosure. However, we cannot guarantee that unauthorized persons will never gain access to your information, and you acknowledge that you provide your information at your own risk, except as otherwise provided by applicable law.</p>
					</div>
				</div>
			</div>
      </div>
      </div>
      </section>


     
    </>
  );
}

Terms.propTypes = propTypes;
Terms.defaultProps = defaultProps;

export default Terms;