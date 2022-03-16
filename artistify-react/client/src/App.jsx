import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
// pages components
import Home from "./views/Home";
import AdminTables from "./views/AdminTables";
import AdminForms from "./views/AdminForms";
import Artists from "./views/Artists";
import Artist from "./views/Artist";
import Albums from "./views/Albums";
import Album from "./views/Album";
import Contact from "./views/Contact";
import Dashboard from "./views/Dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
// partials
import HeaderMain from "./components/HeaderMain";
import SearchResults from "./components/search/SearchResults";
import FooterMain from "./components/FooterMain";
import NavMobile from "./components/nav/NavMobile";
// auth
import useAuth from "./auth/useAuth";
import { ProtectedRoute } from "./auth/ProtectedRoute";

export default function App() {
	// Check the whole auth folder
	const { isLoading } = useAuth();
	const [navMobileStatus, setNavMobileStatus] = useState(false);
	const [searchResults, setSearchResults] = useState([]);

	const handleNavMobileStatus = () => {
		setNavMobileStatus(!navMobileStatus);
	};

	const handleSearchResults = (results) => {
		if (!results) return setSearchResults([]);
		if (results.albums.length || results.artists.length)
			return setSearchResults(results);
	};

	return (
		// the context provider will make currentUser informations down the element tree
		// check src/auth/UserContext
		<>
			{isLoading ? null : (
				<React.Fragment>
					<HeaderMain
						navMobileClbk={handleNavMobileStatus}
						searchClbk={handleSearchResults}
					/>
					<SearchResults data={searchResults} />
					<NavMobile
						navMobileStatus={navMobileStatus}
						navMobileClbk={handleNavMobileStatus}
					/>
					<main id="content_main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/artists" element={<Artists />} />
							<Route path="/artists/:id" element={<Artist />} />
							<Route path="/albums" element={<Albums />} />
							<Route path="/albums/:id" element={<Album />} />
							<Route path="/contact-us" element={<Contact />} />
							<Route path="/signin" element={<Signin />} />
							<Route path="/signup" element={<Signup />} />
							{/* check the protected route in src/auth folder */}
							<Route element={<ProtectedRoute />}>
								<Route path="/dashboard" element={<Dashboard />} />
								{/* Routes here have different endpoint (albums, artists, labels, styles) */}
								<Route path="/admin/:endpoint/" element={<AdminTables />} />
								{/* The mode will be used to either display a create form or update form */}
								<Route path="/admin/:endpoint/:mode" element={<AdminForms />} />
								<Route
									path="/admin/:endpoint/:mode/:id"
									element={<AdminForms />}
								/>
							</Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<FooterMain />
				</React.Fragment>
			)}
		</>
	);
}
