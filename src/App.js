import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Contact from './components/sections/contact';
import Services from './components/sections/services';
import Blog from './components/sections/blog';
import Detail from './components/sections/detail';
import About from './components/sections/company';
// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

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

          <AppRoute exact path="/services" component={Services} layout={LayoutDefault} />
          <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
          <AppRoute exact path="/contact-us" component={Contact} layout={LayoutDefault} />
          <AppRoute exact path="/blog" component={Blog} layout={LayoutDefault} />
          <AppRoute exact path="/blog/:slug" component={Detail} layout={LayoutDefault} />
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Redirect to="/" />
        </Switch>
      )} />
  );
}

export default App;