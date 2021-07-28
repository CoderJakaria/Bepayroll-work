import Contact from "../components/LandingPage/Contact/Contact";
import Features from "../components/LandingPage/features/Features";
import Footer from "../components/LandingPage/Footer/Footer";
import Hero from "../components/LandingPage/hero/Hero";
import Navbar from "../components/LandingPage/Navbar/Navbar";
import PackagePlans from "../components/LandingPage/PackagePlans/PackagePlans";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <PackagePlans />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
