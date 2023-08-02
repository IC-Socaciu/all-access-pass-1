import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function InterviewArticle() {
  const router = useRouter();
  const interviewId = router.query.interviewId;

  return (
    <>
      <h1>Details about interview {interviewId}</h1>
      <p>
        THE UNDERTAKER is a Japanese alternative rock band formed in 2021 in
        Hyakunincho/Shinjuku, consisting of veteran musicians; former members of
        world-fame bands such as Survive and Aggressive Dogs a.k.a. UZI-ONE.
        Their rich influences ranging from rock, blues, country, hardcore and
        punk are blended into a unique sound. The start of 2022 brought numerous
        local live performances and topped with the release of their first
        self-titled digital EP, “The Undertaker”, in July 2022. THE UNDERTAKER
        have also just inked a deal with Split Screen Management, and are aiming
        to release their full-length album in 2023. The band declared: “The
        Undertaker, aka Grave Diggers, is a heavy rock band that will bring out
        the darkness of this changing world and the pus of society. It is an
        organization formed for the purpose of burying this wild and FAKE
        society in a spectacular manner, provoking the world with sometimes
        serious, sometimes ridiculous actions. We are Rock ‘n’ Roll Beast.
        Listen to our first EP with all your heart!” The band comments on
        signing: “We are very happy to be part of the Split Screen Management
        family. We look forward to seeing you all around the world and seeing
        what our band and Split Screen Management bring to the world. Everyone
        who sees this, please support The Undertaker!” THE UNDERTAKER online:
        FACEBOOK YOUTUBE TUNECORE THE UNDERTAKER line-up: Nemo – Guitar & Vocal
        4410 – Guitar Gun-Chang – Session bassist Hon-D – Drums AAP –
      </p>
      <button>
        <Link href="/">⬅️ Home</Link>
      </button>
    </>
  );
}
