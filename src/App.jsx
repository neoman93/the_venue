import React from "react";
import "./resources/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Featured from "./components/Featured/Featured";
import VenueInfo from "./components/VenueInfo/VenueInfo";
import Highlights from "./components/Highlights/Highlights";

const App = () => {
	return (
		<div className="App">
			<Header />
			<>
				<Featured />
			</>
			<>
				<VenueInfo />
			</>
			<>
				<Highlights />
			</>
			<div style={{ backgroundColor: "darkseagreen", height: "800px" }}></div>
			<div style={{ backgroundColor: "steelblue", height: "800px" }}></div>
			<div style={{ backgroundColor: "darkolivegreen", height: "800px" }}></div>
			<div style={{ backgroundColor: "slategray", height: "800px" }}></div>
			<Footer />
		</div>
	);
};

export default App;
