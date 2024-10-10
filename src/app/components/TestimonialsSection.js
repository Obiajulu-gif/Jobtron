// src/components/TestimonialsSection.js
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto text-center px-4">
				<h2 className="text-3xl font-bold mb-8 text-blue-600">
					What Our Users Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Testimonial
						text="Jobtron helped me find a remote job that allows me to travel and work at the same time. It's a game-changer!"
						author="Sarah T."
					/>
					<Testimonial
						text="I found my current job on Jobtron, and the process was so smooth and easy. Highly recommended!"
						author="Mike R."
					/>
				</div>
			</div>
		</section>
	);
};

const Testimonial = ({ text, author }) => (
	<div className="p-8 bg-white border border-gray-200 shadow-md rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105">
		<FaQuoteLeft className="text-blue-600 text-4xl mb-4" />
		<p className="text-gray-700 italic mb-4">&quot;{text}&quot;</p>
		<p className="text-blue-600 font-bold">- {author}</p>
	</div>
);

export default TestimonialsSection;
