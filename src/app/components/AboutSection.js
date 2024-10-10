// src/components/AboutSection.js
import Image from "next/image";

const AboutSection = () => {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left px-4 lg:px-8">
				{/* Illustration Section - Hidden on mobile */}
				<div className="hidden lg:block lg:w-1/2 justify-center lg:justify-start mb-8 lg:mb-0">
					<Image
						src="/images/about.svg"
						alt="Illustration about Jobtron"
						width={500}
						height={500}
						className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
					/>
				</div>
				{/* Text Section */}
				<div className="lg:w-1/2">
					<h2 className="text-4xl font-bold mb-6 text-blue-600">
						What is Jobtron?
					</h2>
					<p className="text-gray-700 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4">
						Jobtron is a platform dedicated to helping job seekers find the best
						remote job opportunities available worldwide. Whether you&apos;re a
						digital nomad, a stay-at-home parent, or just looking to escape the
						commute, Jobtron has jobs tailored for your needs.
					</p>
					<p className="text-gray-700 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
						With powerful search tools and customized filters, finding the
						perfect remote job has never been easier.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
