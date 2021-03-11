import React from "react";
import { AppContext, AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
import App from "next/app";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <title>Car_Flex</title>
      <meta charSet="utf8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
