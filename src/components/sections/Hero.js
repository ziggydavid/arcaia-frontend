import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div style={{ backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.6) 0%,rgba(0,0,0,.6) 100%), url(" + require("./../../assets/images/bg1.jpg") + ")", backgroundSize: "cover", backgroundPosition: "50%" }}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="headPad">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            <span className="text-color-pm">WEALTH  &nbsp;</span> DISTRIBUTED
            </h1>
            <div className="container-xs">
              
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" style={{maxWidth:"180px", backgroundColor:"transparent", border:"1px solid #fd961a",color:"#fd961a"}} wideMobile href="/terms-of-services">
                    Learn More
                    </Button>
                </ButtonGroup> 
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

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;