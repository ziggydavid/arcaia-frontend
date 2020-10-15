import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import InfiniteCarousel from 'react-leaf-carousel';


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

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Delivering end-to-end software enginering,design and creative suite services tailored to brand You Like No Other  '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>

          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right" data-reveal-delay="200">

              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Their commitment to detail and apassion for all things tech and design They helped me launch my first online presence. I recommend them.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Terry Odenigwe</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Website
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — The design experince was sleek. Their expertise on design and development is very commendable Happy working with you guys. </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Grace Adewale </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Graphics & web app</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Their creative insight, rapid response, and their constant update, carrying you along the process. shows their commitment to customer statisfaction
                    </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Orji</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Creative Studio</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div >
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                },
              },
            ]}
            dots={false}
            showSides={false}
            sidesOpacity={0}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
          >
            <div>
              <img src={require('./../../assets/images/aa.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/beautycollection.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/ivan.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/browny.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/LO.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/LV.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/rtc.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/Victor-Lin.jpg')} alt="..." />
            </div>
            <div>
              <img src={require('./../../assets/images/justineze.jpg')} alt="..." />
            </div>
          </InfiniteCarousel>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;