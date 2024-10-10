"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBuilding, FaSearch } from "react-icons/fa";
import Image from "next/image";

const InternshipSectionLayout = () => {
	const [countries, setCountries] = useState([]);
	const [internships, setInternships] = useState([]);
	const [discipline, setDiscipline] = useState("");
	const [state, setState] = useState("");
	const [country, setCountry] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// Fetch country data and cache it in localStorage
	useEffect(() => {
		if (typeof window !== "undefined") {
			const cacheKey = "countries";
			const cachedCountries = localStorage.getItem(cacheKey);
			if (cachedCountries) {
				setCountries(JSON.parse(cachedCountries));
				return;
			}

			axios
				.get("https://zeus-scholarly-backend.onrender.com/api/countries")
				.then((response) => {
					if (Array.isArray(response.data)) {
						setCountries(response.data);
						localStorage.setItem(cacheKey, JSON.stringify(response.data));
					} else {
						throw new Error("Invalid data received for countries");
					}
				})
				.catch((error) => {
					console.error("Error fetching the countries:", error);
					setError("Error fetching countries");
				});
		}
	}, []);

	// Fetch internships on component mount
	useEffect(() => {
		handleSearch();
	}, []);

	const handleSearch = () => {
		setLoading(true);
		setError("");

		const cacheKey = `internships-${discipline}-${state}-${country}`;
		if (typeof window !== "undefined") {
			const cachedData = localStorage.getItem(cacheKey);

			if (cachedData) {
				setInternships(JSON.parse(cachedData));
				setLoading(false);
				return;
			}
		}

		axios
			.get("https://zeus-scholarly-backend.onrender.com/api/internships", {
				params: { discipline, state, country },
			})
			.then((response) => {
				setInternships(response.data.internships);
				if (typeof window !== "undefined") {
					localStorage.setItem(
						cacheKey,
						JSON.stringify(response.data.internships)
					);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching internships:", error);
				setError("Error fetching internships");
				setLoading(false);
			});
	};

	return (
		<>
			<section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-24">
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative container mx-auto text-center">
					<h1 className="text-4xl font-bold">
						Kick-Start Your Career with Internships
					</h1>
					<p className="mt-4 max-w-xl mx-auto text-lg">
						Search for Internship Opportunities Worldwide
					</p>
					<div className="mt-8 flex justify-center">
						<div className="flex flex-wrap items-center bg-white rounded-lg shadow-lg overflow-hidden max-w-xl w-full">
							<select
								className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 focus:outline-none rounded-tl-lg rounded-bl-lg"
								onChange={(e) => setCountry(e.target.value)}
							>
								<option value="">Select a country</option>
								{countries.map((country, index) => (
									<option key={index} value={country.name}>
										{country.name}
									</option>
								))}
							</select>
							<input
								type="text"
								placeholder="State"
								className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 focus:outline-none"
								onChange={(e) => setState(e.target.value)}
							/>
							<input
								type="text"
								placeholder="Discipline"
								className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 focus:outline-none"
								onChange={(e) => setDiscipline(e.target.value)}
							/>
							<button
								className="px-6 py-2 bg-blue-600 text-white flex items-center hover:bg-blue-700 transition duration-300 rounded-tr-lg rounded-br-lg"
								onClick={handleSearch}
								disabled={loading}
							>
								{loading ? (
									"Searching..."
								) : (
									<><FaSearch className="mr-2" /> Find Internship</>
								)}
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-8">
				{error && <div className="text-red-500 text-center mb-6">{error}</div>}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{internships.map((internship, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
							onClick={() =>
								window.open(internship.related_links[0].link, "_blank")
							}
						>
							<div className="flex items-center mb-4">
								{internship.thumbnail ? (
									<Image
										src={internship.thumbnail}
										alt="Thumbnail"
										width={64}
										height={64}
										className="rounded-full object-cover"
									/>
								) : (
									<FaBuilding className="w-16 h-16 mr-4 text-gray-400" />
								)}
								<div>
									<h2 className="text-xl font-semibold text-blue-700">
										{internship.title}
									</h2>
									<p className="text-gray-500">{internship.company_name}</p>
									<p className="text-gray-400 text-sm">{internship.location}</p>
								</div>
							</div>
							<p className="text-gray-700 mt-2">
								{internship.description.slice(0, 120)}...
							</p>
							{internship.date && (
								<p className="text-gray-500 text-sm mt-2">
									Posted on: {internship.date}
								</p>
							)}
							<p className="text-gray-500 text-sm mt-2">
								{internship.schedule_type}
							</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default InternshipSectionLayout;
