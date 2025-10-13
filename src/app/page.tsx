import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnfairInsight from "@/components/UnfairInsight";
import TechnicalBreakthrough from "@/components/TechnicalBreakthrough";
import ProductWalkthrough from "@/components/ProductWalkthrough";
import EarlySignal from "@/components/EarlySignal";
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
        <ProductWalkthrough />
        <EarlySignal />
        <Roadmap />
        <WhyNow />
        <CompetitiveLandscape />
      </main>
    </div>
  );
}
