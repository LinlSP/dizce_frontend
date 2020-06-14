import React, { useContext } from "react";
import { Router, Redirect, Location } from "@reach/router";

/// //////////////////Archives
import { Context } from "./Context";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NotFound } from "./pages/NotFound";
import { Error } from "./pages/Error";
import { SelectLanguage } from "./pages/SelectLanguage";
import { Resources } from "./pages/Resources";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Conditions } from "./pages/Conditions";
import { Free } from "./components/Free";
// import { Store } from './components/Store'
import { Personalized } from "./components/Personalized";

/// //////////////////Styled components
import { Globalstyles } from "./styles/global/Globalstyles";

/// /////////////////App

export const App = () => {
  const { error, isLanguage, langToSave } = useContext(Context);
  if (error)
    return (
      <>
        <Globalstyles />
        <Error />
      </>
    );
  if (langToSave.includes(isLanguage)) {
    return (
      <>
        <Globalstyles />
        <Location>
          {({ location }) => <Header locationPath={location.pathname} />}
        </Location>
        <Router>
          <NotFound default />
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <Resources path="/resources" />
          <Services path="/services" />
          {/* <Store path='/services/store'/> */}
          <Free path="/services/free" />
          <Personalized path="/services/personalized" />
          <Conditions path="/legal" />
        </Router>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Globalstyles />
      <Router>
        <SelectLanguage path="/" />
        <Resources path="/resources" />
        <Redirect from="/*" to="/" default noThrow />
      </Router>
      <Footer />
    </>
  );
};
