import Link from "next/link";

export default function Interviews() {
  return (
    <>
      <h2>
        <Link href="interviews/1">Interview 1</Link>
      </h2>
      <h2>
        <Link href="interviews/2">Interview 2</Link>
      </h2>
      <h2>
        <Link href="interviews/3" replace>
          Interview 3
        </Link>
      </h2>
      <button>
        <Link href="/">⬅️ Home</Link>
      </button>
    </>
  );
}
