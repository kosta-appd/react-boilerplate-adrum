/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <script>
          {`
          window["adrum-start-time"] = new Date().getTime();
           window['adrum-config'] = {
              appKey: "SY-AAB-DKW",
              adrumExtUrlHttp: "http://cdn.appdynamics.com",
              adrumExtUrlHttps: "https://cdn.appdynamics.com",
              beaconUrlHttp: "http://syd-col.eum-appdynamics.com",
              beaconUrlHttps: "https://syd-col.eum-appdynamics.com",
              resTiming: {"bufSize":200,"clearResTimingOnBeaconSend":true},
              maxUrlLength:512,
              page: {"captureTitle":true},
              isZonePromise: true,
              fetch: true
          };
          console.log("adrum-config after: %o", window["adrum-config"]);
          `}
        </script>
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Helmet
        script={[{
          type: 'text/javascript',
          src: '//cdn.appdynamics.com/adrum/adrum-latest.js'
        }]}
      />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
