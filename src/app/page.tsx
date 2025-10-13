import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnfairInsight from "@/components/UnfairInsight";
import TechnicalBreakthrough from "@/components/TechnicalBreakthrough";
import Roadmap from "@/components/Roadmap";
import WhyNow from "@/components/WhyNow";
import CompetitiveLandscape from "@/components/CompetitiveLandscape";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <UnfairInsight />
        <TechnicalBreakthrough />
        <Roadmap />
        <WhyNow />
        <CompetitiveLandscape />
      </main>
    </div>
  );
}
