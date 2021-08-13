import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
        <div className="title-head-subtitle center-content">
                        <p className="hr-effect">Meet the Team Behind Arcaia</p>
                    </div>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                 <img src={require('./../../assets/images/el.jpg')} alt="El" />
                
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider center-center">
                  <span className="testimonial-item-name text-color-high">PRINCE ELVIS P. DAGANA
</span>
                  <span className="text-color-low"><br/> </span>
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
                  <span className="text-color-low"><br/> </span>
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
                  <span className="text-color-low"><br/> </span>
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
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;