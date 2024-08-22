import "./Project.css";

/* eslint-disable react/prop-types */
export function Project({ githubUrl, productionUrl, image, title, description }) {
	return (
		<>
			<li className="project__item">
				<img
					src={image.url}
					alt={image.alt}
					className="project__image"
				/>
				<h3 className="project__title">{title}</h3>
				<p className="project__description">{description}</p>

				<div className="project__links">
					<a
						href={githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="project__link github"
					>
						Github repository
					</a>
					<a
						href={productionUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="project__link production"
					>
						Visit site
					</a>
				</div>
			</li>
		</>
	);
}