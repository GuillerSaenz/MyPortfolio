import "./Resume.css";

export function Resume() {
	return (
		<div className="resume">
			<h2 className="resume__title cv">CV</h2>
			<a
				href="/public/assets/cv_guillermo_saenz.pdf"
				download="Guillermo_Sáenz_CV.pdf"
				className="resume__button button"
			>
				Download CV
			</a>
			<h2 className="resume__title">Proficiency</h2>
			<ul className="resume__list">
				<li className="resume__item">HTML</li>
				<li className="resume__item">CSS</li>
				<li className="resume__item">JavaScript</li>
				<li className="resume__item">PWA</li>
				<li className="resume__item">React</li>
				<li className="resume__item">APIs</li>
				<li className="resume__item">Express</li>
				<li className="resume__item">Node.js</li>
				<li className="resume__item">Vite</li>
				<li className="resume__item">Webpack</li>
				<li className="resume__item">SQL</li>
				<li className="resume__item">PostgreSQL</li>
				<li className="resume__item">NoSQL</li>
				<li className="resume__item">MongoDB</li>
			</ul>
		</div>
	);
}