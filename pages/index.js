import Heading from "@/Header";
import InterviewCard from "@/components/InterviewCard";
import Link from "next/link";
import { useRouter } from "next/router";
export default function HomePage() {
  const router = useRouter();
  // router.push("/interview");

  return (
    <main>
      <Heading>all access pass</Heading>
    </main>
  );
}
