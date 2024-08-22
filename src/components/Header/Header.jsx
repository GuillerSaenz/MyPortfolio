import { useState } from "react";
import { Navigation } from "../Navigation/Navigation";

import "./Header.css";

export function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<header className="header">
			<div className="header__container">
				<p className="header__title">Guillermo</p>
				<div
					className="hamburger"
					onClick={toggleNav}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<Navigation
					isNavOpen={isNavOpen}
					setIsNavOpen={setIsNavOpen}
				/>
			</div>
		</header>
	);
}