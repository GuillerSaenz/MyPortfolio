import "./Footer.css";

export function Footer() {
	return (
		<footer className="footer">
			<ul className="links">
				<li className="linkItem">
					<a
						className="item"
						href="https://github.com/GuillerSaenz"
						target="_blank"
					>
						Github
					</a>
				</li>
				<li className="linkItem">
					<a
						className="item"
						href="https://linkedin.com/in/guillermo-sáenz-sáenz27293331a"
						target="_blank"
					>
						Linkedin
					</a>
				</li>
				<li className="linkItem">
					<a
						className="item"
						href="https://instagram.com/elguiilermo"
						target="_blank"
					>
						Instagram
					</a>
				</li>
			</ul>
		</footer>
	);
}