import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../Utility/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
