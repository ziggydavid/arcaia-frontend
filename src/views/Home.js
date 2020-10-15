import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import { Helmet } from "react-helmet";

const Home = () => {

  return (
    <>

      <div className="">
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