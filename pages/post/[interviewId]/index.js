import Link from "next/link";
import { useRouter } from "next/router";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;

  return (
    <>
      <h2>
        <Link href="interview/1">Interview 1</Link>
      </h2>
      <h2>
        <Link href="interview/2">Interview 2</Link>
      </h2>

      <button>
        <Link href="/">⬅️ Home</Link>
      </button>
    </>
  );
}
