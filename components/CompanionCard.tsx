import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="px-[14px] py-[6px] bg-[#151312] gap-[10px] rounded-[10px] text-white capitalize">
          {subject}
        </div>
        <button className="flex justify-center items-center p-[6px] gap-[10px] rounded-[10px] w-[32px] h-[32px]  bg-[#151312]">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={15}
            height={12.5}
          />
        </button>
      </div>
      <h2 className="text-2xl font-semibold">{topic}</h2>
      <p>Topic: {topic}</p>
      <div className="flex items-center gap-[4px] ">
        <Image src="/icons/clock.svg" alt="" width={13.5} height={13.5} />
        <p className="text-[16px] font-400">{duration} mins duration</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center bg-[#FE5933]">
          Launch Session
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
