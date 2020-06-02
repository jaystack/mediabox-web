import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { compose } from 'recompose';
import { withRouter } from 'next/router';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withReduxStore from 'next-redux-wrapper';
import { AnimatePresence } from 'framer-motion';

// import api from '../api';
import theme from '../lib/theme';
import makeStore from '../storecp';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

import "./base.scss";


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    //
    return {};
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    //
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    const navbarContent = {
      title: "mediabox",
      logoSrc: "/mediabox-darkbg.svg",
      menuItems: [
        {
          title: "digital asset managment",
          href: "/",
        },
        {
          title: "why mediabox",
          href: "/",
        },
        {
          title: "brand",
          href: "/",
        },
        {
          title: "about us",
          href: "/",
        },
        {
          title: "faqs",
          href: "/faqs",
        },
        {
          title: "contact",
          href: "/",
        },
        {
          title: "login",
          href: "/",
        },
      ],
      
    };

    return (
      <React.Fragment>
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            {/* <CssBaseline /> */}
            <PageHeader navbarContent={navbarContent} />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
            <Footer />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const enhance = compose(
  withReduxStore(makeStore),
  withRouter,
);

export default enhance(MyApp);
