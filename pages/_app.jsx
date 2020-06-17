import App from "next/app";
import React from "react";
import Head from "next/head";
import { compose } from "recompose";
import { withRouter } from "next/router";

import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import withReduxStore from "next-redux-wrapper";
import { AnimatePresence } from "framer-motion";

// import api from '../api';
import theme from "../lib/theme";
import makeStore from "../storecp";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

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
      cardContent: `<h3>GET IN TOUCH</h3>
        <p>20-22 Wenlock Road</p>
        <p>London, N1 7GU</p>
        <p>T: <a href="tel:02037459067">0203 7459067</a></p>
        <p>E: <a href="mailto:info@mediaboxsolutions.co.uk">info@mediaboxsolutions.co.uk</a></p>`,
      title: "mediabox",
      logoSrc:
        (router.asPath || "").indexOf("/login") > -1
          ? "/mediabox-lightbg.svg"
          : "/mediabox-darkbg.svg",
      menuItems: [
        {
          title: "digital asset managment",
          href: "/digitalAssetManagement",
        },
        {
          title: "why mediabox",
          href: "/whyMediabox",
        },
        {
          title: "brand",
          href: "/brand",
        },
        {
          title: "about us",
          href: "/about",
        },
        {
          title: "faqs",
          href: "/faqs",
        },
        {
          title: "contact",
          href: "/contact",
        },
        {
          title: "login",
          href: "/login",
        },
      ],
      iconMenuItems: [
        {
          icon: <i className="fa fa-phone" />,
          href: "tel:02037459067",
        },
        {
          icon: <i className="fa fa-envelope" />,
          href: "mailto:info@mediaboxsolutions.co.uk",
        },
      ],
    };
    const footerContent = {
      logoSrc: "/mediabox-lightbg.svg",
      copyRight: "© 2020 Mediabox.",
      contact: {
        title: "contact details",
        content: `
          <p>20-22 Wenlock Road,<br>
          London, N1 7GU</p>
          <p><a href="tel:0203 7459067">0203 7459067</a><br>
          <a href="mailto:info@mediaboxsolutions.co.uk">info@mediaboxsolutions.co.uk</a>`,
      },
      iconMenuItems: [
        {
          icon: <i className="fa fa-phone" />,
          href: "tel:02037459067",
        },
        {
          icon: <i className="fa fa-envelope" />,
          href: "mailto:info@mediaboxsolutions.co.uk",
        },
      ],
      menuBlocks: [
        {
          title: "quick links",
          menuItems: [
            {
              title: "Why mediabox",
              href: "/",
            },
            {
              title: "Brand",
              href: "/",
            },
            {
              title: "About us",
              href: "/",
            },
            {
              title: "Contact",
              href: "/",
            },
          ],
        },
        {
          title: "quick links",
          menuItems: [
            {
              title: "Account",
              href: "/",
            },
            {
              title: "FAQs",
              href: "/faqs",
            },
            {
              title: "Login",
              href: "/",
            },
          ],
        },
      ],
      iconMenuItems: [
        {
          icon: <i className="fa fa-phone" />,
          href: "tel:02037459067",
        },
        {
          icon: <i className="fa fa-envelope" />,
          href: "mailto:info@mediaboxsolutions.co.uk",
        },
      ],
    };

    return (
      <React.Fragment>
        <a id="top" />
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
            <main>
              <Component {...pageProps} key={router.asPath} />
            </main>
            <Footer footerContent={footerContent} />
          </Provider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const enhance = compose(withReduxStore(makeStore), withRouter);

export default enhance(MyApp);
