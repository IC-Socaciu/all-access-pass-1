import GlobalStyle from "../styles";
import InterviewCard from "@/components/InterviewCard";
import { interviews } from "@/public/interviews";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
      <>
        <ul>
          {interviews.map((interview) => (
            <li className="interview-card" key={interview.id}>
              <InterviewCard
                id={interview.id}
                title={interview.title}
                summary={interview.summary}
                text={interview.text}
                image={interview.image}
              />
            </li>
          ))}
        </ul>
      </>
    </>
  );
}
