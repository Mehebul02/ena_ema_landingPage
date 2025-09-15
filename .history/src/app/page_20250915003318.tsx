import BannerSection from "@/components/banner_Section/BannerSection";
import Benefits from "@/components/benefits/Benefits";
import CaseStudiesSection from "@/components/case_studies/Case_Studies";


export default function Home() {
  return (
    <div>
      <BannerSection/>
      <Benefits/>
      <CaseStudiesSection/>
    {/* <ProductImageSlider/> */}
    </div>
  );
}
