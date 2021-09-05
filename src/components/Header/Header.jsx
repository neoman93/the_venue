import React, { useState, useEffect } from "react";

import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "../SideDrawer/SideDrawer";

const Header = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [headerShow, setheaderShow] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setheaderShow(true);
		} else {
			setheaderShow(false);
		}
	};

	const toggleDrawer = (value) => {
		setDrawerOpen(value);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: headerShow ? "#2f2f2f" : "transparent",
				boxShadow: "none",
				padding: "10px 0px",
			}}
		>
			<Toolbar>
				<div className="header_logo">
					<div className="font_righteous header_logo_venue">The Venue</div>
					<div className="header_logo__title">MUSICA EVENTS</div>
				</div>
				<IconButton aria-label="Menu" color="inherit" onClick={() => toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>
				<SideDrawer open={drawerOpen} onClose={(value) => toggleDrawer(value)} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
