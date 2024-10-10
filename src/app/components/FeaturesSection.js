// src/components/FeaturesSection.js
import { FaBriefcase, FaFilter, FaBell } from "react-icons/fa";

const FeaturesSection = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="container mx-auto text-center px-4">
				<h2 className="text-3xl font-bold mb-8 text-blue-600">
					Why Choose Jobtron?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<FeatureCard
						icon={<FaBriefcase size={32} className="text-blue-600 mb-4" />}
						title="Comprehensive Job Listings"
						description="We aggregate remote job listings from reputable companies and platforms, so you get access to the best opportunities in one place."
					/>
					<FeatureCard
						icon={<FaFilter size={32} className="text-blue-600 mb-4" />}
						title="Customizable Filters"
						description="Easily filter jobs by type, salary range, industry, experience level, and more to find a job that perfectly matches your criteria."
					/>
					<FeatureCard
						icon={<FaBell size={32} className="text-blue-600 mb-4" />}
						title="Stay Updated with Alerts"
						description="Set up job alerts to get notified about new opportunities that match your preferences, so you never miss out on your dream job."
					/>
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-white shadow-2xl rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
    {icon}
    <h3 className="font-semibold text-2xl mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-700 text-lg">{description}</p>
  </div>
);

export default FeaturesSection;
