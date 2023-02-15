// A custom Document can update the <html> and <body> tags used to render a Page.
// This file is only rendered on the server, so event handlers like onClick
// cannot be used in _document. To override the default Document,
// create the file pages/_document.js
//
// https://nextjs.org/docs/advanced-features/custom-document

import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  // getInitialProps enables server-side rendering in a page
  // and allows you to do initial data population, it means sending
  // the page with the data already populated from the server.
  // This is especially useful for SEO.
  //
  // https://nextjs.org/docs/api-reference/data-fetching/get-initial-props
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
