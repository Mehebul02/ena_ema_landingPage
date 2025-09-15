import BannerSection from "@/components/banner_Section/BannerSection";
import Benefits from "@/components/benefits/Benefits";
import CaseStudiesSection from "@/components/case_studies/Case_Studies";
import PricingSection from "@/components/pricing/Pricing";
import { ProcessSection } from "@/components/process/Process";


export default function Home() {
  return (
    <div>
      <BannerSection/>
      <Benefits/>
      <CaseStudiesSection/>
      <PricingSection/>
      <ProcessSection/>
   
    </div>
  );
}
