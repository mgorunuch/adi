import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnfairInsight from "@/components/UnfairInsight";
import TechnicalBreakthrough from "@/components/TechnicalBreakthrough";
import Roadmap from "@/components/Roadmap";
import CompetitiveLandscape from "@/components/CompetitiveLandscape";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <UnfairInsight />
        <TechnicalBreakthrough />
        <Roadmap />
        <CompetitiveLandscape />
        <WhyMe />
      </main>
    </div>
  );
}
