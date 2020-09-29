import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

import Image from '../elements/Image';



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
  invertMobile,
  invertDesktop,
  alignTop,
  invertColor,
  imageFill,
  ...props
}) => {

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );



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
    <>
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-sm ">
          <div className={innerClasses}>
            <div className="hero-content">

              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{ color: "rgb(27 152 213)" }}>
                Software and Design <span >Solutions</span>
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  Creating and building game changing brands. with unique concepts that will change
                  your public image for the best.
                </p>

              </div>
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

            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <div className="text-xxs text-color-primary fw-600 tt-u mb-8" style={{ color: "#24E5AF" }}>
                    Lightning fast workflow
                </div>
                  <h3 className="mt-0 mb-12">
                    Data-driven insights
                </h3>
                  <p className="m-0">
                    we ensure we are at the cutting edge of software technologies, so we can offer global best practices that are designed to last..
                </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/promo-1.png')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;