import GlobalStyle from "../styles";
import Footer from "@/components/Footer";
import { SWRConfig } from "swr";
import WebsiteTitle from "@/components/Header";

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    const errorObject = await response.json();
    const error = new Error(errorObject.message);
    throw error;
  }
  return await response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <WebsiteTitle />
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Footer />
      </SWRConfig>
    </>
  );
}
