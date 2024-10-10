// src/components/Footer.js
import Link from "next/link";
import {
	FaLock,
	FaFileContract,
	FaEnvelope,
	FaTwitter,
	FaLinkedin,
	FaFacebook,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-10">
			<div className="container mx-auto px-4 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
				{/* About Section */}
				<div className="flex-1 text-center md:text-left">
					<h3 className="font-bold text-lg mb-2">About Jobtron</h3>
					<p className="text-gray-400 text-sm leading-relaxed">
						Jobtron is dedicated to connecting job seekers with remote
						opportunities worldwide. We offer a curated selection of remote
						jobs, customizable search tools, and resources to help you land your
						dream role.
					</p>
				</div>

				{/* Navigation Links */}
				<div className="flex-1 flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
					<Link href="/about" className="text-gray-400 hover:text-white">
						About Us
					</Link>
					<Link href="/jobs" className="text-gray-400 hover:text-white">
						Jobs
					</Link>
					<Link href="/blog" className="text-gray-400 hover:text-white">
						Blog
					</Link>
					<Link href="/contact-us" className="text-gray-400 hover:text-white">
						Contact Us
					</Link>
				</div>

				{/* Legal and Social Media Links */}
				<div className="flex-1 flex flex-col items-center md:items-end space-y-4">
					{/* Legal Links */}
					<div className="flex space-x-4">
						<Link
							href="/privacy-policy"
							className="text-gray-400 hover:text-white flex items-center"
						>
							<FaLock className="mr-1" /> Privacy Policy
						</Link>
						<Link
							href="/terms-of-service"
							className="text-gray-400 hover:text-white flex items-center"
						>
							<FaFileContract className="mr-1" /> Terms of Service
						</Link>
					</div>

					{/* Social Media Icons */}
					<div className="flex space-x-4 text-gray-400">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							<FaTwitter size={20} />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							<FaLinkedin size={20} />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white"
						>
							<FaFacebook size={20} />
						</a>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="text-center text-gray-500 text-sm mt-8">
				&copy; {new Date().getFullYear()} Jobtron. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
