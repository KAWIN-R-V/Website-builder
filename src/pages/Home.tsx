import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Portfolio from "../components/sections/PortfolioPreview";
import Testimonials from "../components/sections/Testimonials";


function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default Home;