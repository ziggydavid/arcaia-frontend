import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const RegDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <Footer />
  </>
);

export default RegDefault;