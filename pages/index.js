import Heading from "@/Header";
import InterviewCard from "@/components/InterviewCard";
import Link from "next/link";
import { useRouter } from "next/router";
import { interviews } from "@/public/interviews";

export default function HomePage() {
  const router = useRouter();
  // router.push("/interview");

  return (
    <main>
      <Heading>all access pass</Heading>
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
    </main>
  );
}
