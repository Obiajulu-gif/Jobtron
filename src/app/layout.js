// src/app/layout.js
import "./globals.css"; // Import global styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
	title: "Jobtron - Find Your Perfect Remote Job",
	description: "Connecting job seekers with top remote job opportunities.",
	image: "/images/logo.png",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{metadata.title}</title>
			</head>
			<body className="bg-gray-100">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
