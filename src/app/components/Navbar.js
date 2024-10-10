"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo Section */}
				<div className="flex items-center space-x-2">
					<Link href="/" className="flex items-center space-x-2">
						<Image
							src="/images/logo.png" // Path to your logo image
							alt="Jobtron Logo"
							width={32} // Desired width of logo image
							height={32} // Desired height of logo image
							priority // Ensures the logo loads quickly
						/>
						<span className="text-2xl font-bold text-blue-600">Jobtron</span>
					</Link>
				</div>

				{/* Right-aligned Desktop Navigation Links */}
				<div className="hidden md:flex items-center space-x-8">
					<Link href="/jobs" className="text-gray-600 hover:text-blue-600">
						Jobs
					</Link>
					<Link href="/about" className="text-gray-600 hover:text-blue-600">
						About
					</Link>
					<Link href="/contact" className="text-gray-600 hover:text-blue-600">
						Contact
					</Link>
					<Link
						href="/signup"
						className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
					>
						Sign Up
					</Link>
				</div>

				{/* Hamburger Menu Icon (Mobile Only) */}
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu} aria-label="Toggle Menu">
						{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-lg">
					<div className="px-12 py-4 space-y-4 flex flex-col">
						<Link
							href="/jobs"
							className="block text-gray-600 hover:text-blue-600"
							onClick={toggleMenu}
						>
							Jobs
						</Link>
						<Link
							href="/about"
							className="block text-gray-600 hover:text-blue-600"
							onClick={toggleMenu}
						>
							About
						</Link>
						<Link
							href="/contact"
							className="block text-gray-600 hover:text-blue-600"
							onClick={toggleMenu}
						>
							Contact
						</Link>
						<Link
							href="/signup"
							className="block text-blue-600 bg-gray-100 w-full text-center py-2 rounded-md hover:bg-gray-200"
							onClick={toggleMenu}
						>
							Sign Up
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
