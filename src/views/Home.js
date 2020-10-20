import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';


const Home = () => {

  return (
    <>

      <div className="">

        <Hero className="illustration-section-01 background" />
        <FeaturesTiles className="background" />
        <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02 background" />
        <Testimonial topDivider className="background" />
        <Cta split />
        <div className="fixedsocial  floating">
          <div className="facebookflat">
            <a href="https://wa.me/2349076277509"><img src={require("../assets/images/whatsapp.svg")} alt="..." /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;