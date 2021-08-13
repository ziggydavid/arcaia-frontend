import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from "react-router-dom";

/*
 <div className="facts-footer">
                  <div>
                    <h5>$50,950</h5>
                    <span>Trade Volume</span>
                  </div>
                  <div>
                    <h5>30</h5>
                    <span>Active Members</span>
                  </div>
                  <div>
                    <h5>10</h5>
                    <span>Traders</span>
                  </div>
                  <div>
                    <h5>127</h5>
                    <span>Payouts</span>
                  </div>
                </div> */
const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="footer">
        <div className="top-footer">
          <div className="container">
            <div className="row">

              <div className="col-sm-4 col-md-2">
                <h4>Our Company</h4>
                <div className="menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4 col-md-2">
                <h4>Help &amp; Support</h4>
                <div className="menu">
                  <ul>
                    <li><a href="faq.html">FAQ</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-4 col-md-3">
                <h4>Contact Us </h4>
                <div className="contacts">
                  <div>
                    <span>hello@arcaiacooperative.org</span>
                  </div>
                  <div>
                    <span>+2348060515498</span>
                  </div>
                  <div>
                    <span >KM 5 Isaac BORO Expressway (Pink Building Adjacent or on the other side of Air force, Beside Redeemed Church), <br/> Okaka Yenagoa Bayelsa State
</span>
                  </div>
                  <div>
                    <span>mon-sat 09am ⇾ 05pm</span>
                  </div>
                </div>


                <div className="social-footer">
                  <ul>
                    <li><a href="https://www.facebook.com/arcaiacooperative" target="_blank"><svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <title>Facebook</title>
                      <path
                        d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" />
                    </svg></a></li>
                    <li><a href="https://www.instagram.com/arcaiacooperative" target="_blank"><svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <title>Twitter</title>
                      <path
                        d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" />
                    </svg></a></li>
                  </ul>
                </div>

              </div>

              <div className="col-sm-12 col-md-5">

               

                <hr />

                <div className="payment-logos">
                  <h4 className="payment-title">Supported Payment Methods</h4>

                  <img src={require("./../../assets/images/american-express.png")} alt="american-express" />
                  <img src={require("./../../assets/images/mastercard.png")} alt="mastercard" />
                  <img src={require("./../../assets/images/visa.png")} alt="visa" />
                  <img src={require("./../../assets/images/paypal.png")} alt="paypal" />
                  <img className="last" src={require("./../../assets/images/maestro.png")} alt="maestro" />


                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">

                <p className="text-center">Created with Love by <a href="https://integralsystems.co" target="_blank">Integral Software Systems Limited</a></p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>

  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;