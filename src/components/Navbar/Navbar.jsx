import { useState } from "react";

import { logo } from "../../assets";
import { Menu, Navigation } from "..";

import "./Navbar.scss"

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => setToggle((t) => !t);

	return (
		<nav className="navbar">
			<img src={logo} alt="hoobank" className="navbar__logo" />
			<Navigation/>
			<Menu
				toggle={toggle}
				handleToggle={handleToggle}
			/>
		</nav>
	);
};

export default Navbar;
