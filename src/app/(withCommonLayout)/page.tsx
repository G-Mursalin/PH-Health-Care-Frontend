import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import Stats from "@/components/UI/HomePage/Stats/Stats";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUS from "@/components/UI/HomePage/WhyUs/WhyUS";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUS />
      <HowItWorks />
      <Stats />
    </>
  );
};

export default HomePage;
