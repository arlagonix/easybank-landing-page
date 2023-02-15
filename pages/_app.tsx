// When using Next.js you’ll most likely need to override the global
// App component to get access to some features like persisting state,
// or global layouts. This can be done by creating a file_app.js directly
// in the ./pages/ folder. If this file exists, then Next.js will use this
// instead of the default App.
//
// https://jools.dev/nextjs-_appjs-example
// https://nextjs.org/docs/advanced-features/custom-app

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../global/GlobalStyle";
import { theme } from "../global/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
