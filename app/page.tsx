import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import React from "react";
import { recentSessions, subjects } from "./../constants/index";
import {
  getAllCompanions,
  getRecentCompanions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanion = await getRecentCompanions(10);

  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section ">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          classNames="w-2/3 max-lg:w-full"
          companions={recentSessionsCompanion}
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
