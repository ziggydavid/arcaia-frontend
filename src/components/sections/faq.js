import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import {
  CollapsibleComponent,
  CollapsibleHead,
  CollapsibleContent
} from "react-collapsible-component";
import {Row,Col} from "reactstrap";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}



const Faq = ({
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
            <h2 className="title-head text-center">FREQUENTLY ASKED <span style={{ color: "#fd961a" }}>&nbsp;QUESTIONS</span></h2>

          </div>
          <hr className="banner-area-hr" /> 
          <ul class="breadcrumb">
            <li><a href="/"> Home </a></li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="container">
          <div className={innerClasses}>
            <Row>
              <Col>
              <Col md="10">
          <CollapsibleComponent > 
                    <CollapsibleHead className="accordion-head-c" 
                        isExpanded={true}  
                        >
                          WHAT IS ARCAIA ABOUT ?</CollapsibleHead>
                    <CollapsibleContent className="panel-accordion-c" isExpanded={true}>
                        <p>
                        Arcaia Multipurpose Cooperative Society is a Cooperative Society that provides an avenue for its members to come together, pool finances together with the sole purpose of engaging in legal, profitable trades that would enable them earn profit at the end of their contribution cycle. This Organization was borne out of the need to alleviate poverty, empower the weak and vulnerable in the society and get rid of the biting hardship in our nation and the world.
                        </p>
                    </CollapsibleContent>

                    
                    <CollapsibleHead className="accordion-head-c"
                        
                    >
                       WHO ARE THE MANAGEMENT OF ARCAIA?
                    </CollapsibleHead>
                    <CollapsibleContent className="panel-accordion-c" >
                        <p>
                        CEO/Chairman - Prince Elvis Peremobowei Dagana

Treasurer - Mr Luke Eppeh

Secretary - Ms Gloria Benedict
                        </p>
                    </CollapsibleContent>

                   
                    <CollapsibleHead className="accordion-head-c">WHAT DO YOU DO TO RETURN 40% TO MEMBERS?</CollapsibleHead>
                    <CollapsibleContent className="panel-accordion-c">
                        <p>We invest in Forex Trading, which is a very profitable endeavour.
                        </p>
                    </CollapsibleContent>

                    <CollapsibleHead className="accordion-head-c">ARE YOU LEGALLY REGISTERED?</CollapsibleHead>
                    <CollapsibleContent className="panel-accordion-c">
                        <p>
                        Arcaia Multipurpose Cooperative Society is Duly Registered with the Bureau of Cooperative Development, Bayelsa State Government with Registration Number: 00924.
                        </p>
                        
                    </CollapsibleContent>

                    <CollapsibleHead className="accordion-head-c" >WHAT HAPPENS IN THE EVENT OF A NEGATIVE IMPACT ON YOUR TRADING?</CollapsibleHead>
                    <CollapsibleContent className="panel-accordion-c">
                        <p>
                        We have our Back-up Capital as well as our Risk Management Measures. However in the event of a negative impact on our Trading, Members are guaranteed their Contributions back.
                        </p>
                        
                    </CollapsibleContent>
                </CollapsibleComponent>
                </Col>
                <Col md="2">

                </Col>
                </Col>
                </Row>
   </div>
        </div>

      </section>


     
    </>
  );
}

Faq.propTypes = propTypes;
Faq.defaultProps = defaultProps;

export default Faq;