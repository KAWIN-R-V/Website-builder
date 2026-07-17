import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";

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