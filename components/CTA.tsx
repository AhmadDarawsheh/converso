import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality — and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <button className="flex items-center justify-center gap-2 bg-[#FE5933] rounded-xl px-4 py-2 w-full">
        <Image src="/icons/plus.svg" alt="plus" width={13} height={13} />
        <Link href="/companions/new">Build a New Companion</Link>
      </button>
    </section>
  );
};

export default CTA;
