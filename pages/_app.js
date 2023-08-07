import GlobalStyle from "../styles";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
