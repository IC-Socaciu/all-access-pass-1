import GlobalStyle from "../styles";
import { interviews } from "@/public/interviews";
import InterviewCard from "@/components/InterviewCard";
import Heading from "@/Header";
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
