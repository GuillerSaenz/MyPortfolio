import { NavLink } from "react-router-dom";
import "./Navigation.css";

const navLinks = [
	{
		id: "aboutMe",
		url: "/",
		name: "About Me",
	},
	{
		id: "portfolio",
		url: "/portfolio",
		name: "Portfolio",
	},
	{
		id: "contact",
		url: "/contact",
		name: "Contact",
	},
	{
		id: "resume",
		url: "/resume",
		name: "Resume",
	},
];

// eslint-disable-next-line react/prop-types
export function Navigation({ isNavOpen, setIsNavOpen }) {
	return (
		<nav className={`navigation__nav ${isNavOpen ? "open" : ""}`}>
			<ul className="navigation__links">
				{navLinks.map((link) => (
					<li key={`${link.id}`}>
						<NavLink
							to={`${link.url}`}
							className={({ isActive }) => `link ${isActive ? "active" : ""}`}
							onClick={() => setIsNavOpen(false)}
						>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}