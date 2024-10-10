import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CallToActionSection = () => {
	return (
		<section className="bg-blue-600 text-white py-12">
			<div className="container mx-auto text-center px-4">
				<h2 className="text-3xl font-bold mb-4">
					Ready to Find Your Next Remote Job?
				</h2>
				<p className="mb-8 text-lg">
					Sign up today and start exploring remote job opportunities tailored
					just for you.
				</p>
				<Link href="/signup" passHref>
					<button className="bg-white text-blue-600 px-10 py-3 rounded-lg font-semibold space-x-2 transition-transform transform hover:scale-105 hover:bg-blue-50 hover:text-blue-700 focus:ring-2 focus:ring-blue-300">
						Get Started <FaArrowRight />
					</button>
				</Link>
			</div>
		</section>
	);
};

export default CallToActionSection;
