import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UnfairInsight from "@/components/UnfairInsight";
import TechnicalBreakthrough from "@/components/TechnicalBreakthrough";
import TargetCustomers from "@/components/TargetCustomers";
import Roadmap from "@/components/Roadmap";
import CompetitiveLandscape from "@/components/CompetitiveLandscape";
import GoToMarket from "@/components/GoToMarket";
import Pricing from "@/components/Pricing";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <UnfairInsight />
        <TechnicalBreakthrough />
        <TargetCustomers />
        <Roadmap />
        <CompetitiveLandscape />
        <GoToMarket />
        <Pricing />
        <WhyMe />
      </main>
    </div>
  );
}
