import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import RegDefault from './layouts/RegLayout'
// Views 
import Home from './views/Home';
import Contact from './components/sections/contact';
import LoginPage from './components/sections/login';
import About from './components/sections/about';
import RegisterPage from './components/sections/register';
import PassReset from './components/sections/PasswordReset';
import EmailSent from './components/sections/emailsent';
import VerifyPage from './components/sections/verify';
import Terms from './components/sections/terms';
import Faq from './components/sections/faq';
import Partner from './components/sections/partner';
import { Redirect } from 'react-router-dom';
import AgreeMent from './components/sections/agreement';
import { Route } from 'react-router-dom';
import ForgotPass from './components/sections/ForgotPassword';
import 'antd-country-phone-input/dist/index.css';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};
const user = JSON.parse(localStorage.getItem("user"));
const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/Agreement" component={AgreeMent} layout={LayoutDefault} />
          <AppRoute exact path="/email-sent" component={EmailSent} layout={LayoutDefault} />
          <AppRoute exact path="/faq" component={Faq} layout={LayoutDefault} />
          <AppRoute exact path="/terms-of-services" component={Terms} layout={LayoutDefault} />
          <AppRoute exact path="/verifyemail/:token" component={VerifyPage} layout={LayoutDefault} />
          <AppRoute exact path="/password-reset/confirm/:uid/:token" component={PassReset} layout={LayoutDefault} />
        <AppRoute exact path="/forgot-password" component={ForgotPass} layout={LayoutDefault} />
          <AppRoute exact path="/register" component={RegisterPage} layout={LayoutDefault} />
          <AppRoute exact path="/partner" component={Partner} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/contact-us" component={Contact} layout={LayoutDefault} />
         
            <AppRoute exact path="/login" component={LoginPage} layout={LayoutDefault} />
          
          <Route
            path="/user"
            render={() => {
              window.location.href = '/user/dashboard';
              return null;
            }} />
          <Redirect to="/" />
        </Switch>
      )} />
  );
}

export default App;