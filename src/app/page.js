import Link from "next/link";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CallToActionSection from "./components/CallToActionSection";

const HomePage = () => {
	return (
		<div>
			<HeroSection />
			<AboutSection />
			<FeaturesSection />
			<TestimonialsSection />
			<CallToActionSection />
		</div>
	);
};

export default HomePage;
