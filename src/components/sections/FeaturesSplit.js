import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '../elements/Button';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, green } from "@material-ui/core/colors";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";
import { Col, Row } from "reactstrap"
import ModalVideo from 'react-modal-video'


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiTabs: {
      root: {
        color: '#999',
        backgroundColor: '#161616',
      },
      indicator: {
        backgroundColor: "#d37d15"
      }
    },
    MuiTab: {
      root: {
        "&:hover": {
          backgroundColor: '#d37d15',
          color: '#ffffff'
        },
        "&:active": {
          backgroundColor: '#d37d15',
          color: '#999'
        }
      },

    }
  }
});

const useStyles = makeStyles(theme => ({
  tab1: {
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      width: "100%"
    }
  }
}));



const FeaturesSplit = ({
  className,
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
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const [value, setValue] = React.useState(0);

  const [iconPills, setIconPills] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isOpen, setOpen] = React.useState(false)

  const classes = useStyles();
  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay={1} isOpen={isOpen} videoId="B_SaHIH3dck" onClose={() => setOpen(false)} />


      </React.Fragment>
      <div className="container">
        <div className={innerClasses}>
          <h1 className="mt-0 mb-16 reveal-from-bottom center-content" data-reveal-delay="200">
            ABOUT<span style={{ color: "#fd961a" }}>&nbsp;US</span>
          </h1>
          <div className="title-head-subtitle center-content">
            <p className="hr-effect">We are a Cooperative Society that enables Members contribute and earn profit monthly.</p>
          </div>
          <div className={splitClasses}>

            <div className="split-item">

            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">

                <h3 className="mt-0 mb-12">
                  WE ARE ARCAIA
                  </h3>
                <p className="m-0">
                  Arcaia Multipurpose Cooperative Society is a Cooperative Society that provides an avenue for its members to come together, pool finances together with the sole purpose of engaging in legal, profitable trades that would enable them earn profit at the end of their contribution cycle. This Organization was borne out of the need to alleviate poverty, empower the weak and vulnerable in the society and get rid of the biting hardship in our nation and the world.
                <br />
                  <br />
                  <MuiThemeProvider theme={theme}>
                    <div >
                      <Paper square >
                        <Tabs
                          value={value}
                          onChange={handleChange}
                          indicatorColor="primary"
                          textColor="white"
                          variant="scrollable"
                          aria-label="disabled tabs example"
                        >
                          <Tab style={{ minWidth: 50 }} label="OUR MISSION" {...a11yProps(0)} />
                          <Tab style={{ minWidth: 50 }} label="OUR ADVANTAGES" {...a11yProps(1)} />
                          <Tab style={{ minWidth: 50 }} label="OUR GUARANTEE" {...a11yProps(2)} />
                        </Tabs>
                      </Paper>
                      <TabPanel value={value} index={0}>
                        <p className="text-left">To Eradicate Poverty and Empower the Weak and Vulnerable in the Society</p>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <p>All Our processes are Streamlined and Automated for Overall Operational Efficiency and Member Satisfaction.</p>
                      </TabPanel>
                      <TabPanel value={value} index={2}>
                        <p>Contributions are guaranteed back in the event of a negative impact on our trading.</p>
                      </TabPanel>
                    </div>
                  </MuiThemeProvider>
                </p>
                <Button tag="a" color="primary" style={{ fontSize: "14px", fontSize: "600", textTransform: "uppercase" }} wideMobile href="/about">
                  Read More
                    </Button>
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
      <Row className="center-content">

        <Col md="8" className="ts-padding img-block-left">
          <div className="gap-20"></div>
          <Row >

            <Col md="6">
              <div className="feature text-center">
                <span className="feature-icon">

                  <img id="strong-security" src={require("./../../assets/images/strong-security.png")} alt="strong security" />
                </span>
                <h3 className="feature-title center-center">Strong Security</h3>
                <p>Protection against DDoS attacks, <br />full data encryption</p>
              </div>
            </Col>

            <div className="gap-20-mobile"></div>

            <Col md="6" >
              <div className="feature text-center">
                <span className="feature-icon">
                  <img id="world-coverage" src={require("./../../assets/images/world-coverage.png")} alt="world coverage" />
                </span>
                <h3 className="feature-title center-center">World Coverage</h3>
                <p>Our Members who have Registered with us in Bayelsa can reach us <br /> from anywhere on the globe</p>
              </div>
            </Col>

          </Row>
          <div className="gap-20"></div>
          <Row>

            <Col md="6">
              <div className="feature text-center">
                <span className="feature-icon">
                  <img id="payment-options" src={require("./../../assets/images/payment-options.png")} alt="payment options" />
                </span>
                <h3 className="feature-title center-center">Payment Options</h3>
                <p>Popular methods: Visa, MasterCard, <br /> and Bank Transfer</p>
              </div>
            </Col>

            <div className="gap-20-mobile"></div>

            <Col md="6">
              <div className="feature text-center">
                <span className="feature-icon">
                  <img id="mobile-app" src={require("./../../assets/images/mobile-app.png")} alt="mobile app" />
                </span>
                <h3 className="feature-title center-center">Member Web Portal</h3>
                <p>Our Web Portal would soon<br /> be accessible.</p>
              </div>
            </Col>

          </Row>
          <div className="gap-20"></div>
          <Row>

            <Col md="6">
              <div className="feature text-center">
                <span className="feature-icon">
                  <img id="cost-efficiency" src={require("./../../assets/images/cost-efficiency.png")} alt="cost efficiency" />
                </span>
                <h3 className="feature-title center-center">Operational Efficiency</h3>
                <p>Returns are <br /> paid on due date.</p>
              </div>
            </Col>

            <div className="gap-20-mobile"></div>

            <Col md="6">
              <div className="feature text-center">
                <span className="feature-icon">
                  <img id="high-liquidity" src={require("./../../assets/images/high-liquidity.png")} alt="high liquidity" />
                </span>
                <h3 className="feature-title center-center">Close Community</h3>
                <p>We maintain a Close Relationship with our Members</p>
              </div>
            </Col>

          </Row>
        </Col>

        <Col md="4" className="ts-padding bg-image-1" style={{ backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.6) 0%,rgba(0,0,0,.6) 100%), url(" + require("./../../assets/images/bg-video.jpg") + ")" }}>
          <div>
            <div className="text-center">
              <Button className="button-video mfp-youtube" onClick={() => setOpen(true)} />
            </div>
          </div>
        </Col>

      </Row>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;