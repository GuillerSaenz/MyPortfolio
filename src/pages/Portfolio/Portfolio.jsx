import { Project } from "../../components/Project/Project";
import "./Portfolio.css";

const projects = [
	{
		id: "taskBoard",
		githubUrl: "https://github.com/GuillerSaenz/TaskBoard",
		productionUrl: "https://onrender.com/",
		image: {
			url: "",
			alt: "Task Board Cover Image",
		},
		title: "Task Board",
		description:
			"An e-commerce web app that allows users to browse products, add items to their cart, and make secure purchases. It includes user authentication, product categories, and a responsive design.",
	},
	{
		id: "noteTaker",
		githubUrl: "https://github.com/GuillerSaenz/NoteTaker",
		productionUrl: "https://onrender.com/",
		image: {
			url: "https://onrender.com/",
			alt: "Note Taker Cover Image",
		},
		title: "Note Taker",
		description:
			"A web app for managing tasks and to-do lists. Users can create tasks, set deadlines, mark completed items, and organize tasks into categories.",
	},
	{
		id: "techBlog",
		githubUrl: "https://github.com/GuillerSaenz/TechBlog",
		productionUrl: "https://onrender.com/",
		image: {
			url: "https://onrender.com/",
			alt: "Tech Blog Cover Image",
		},
		title: "Tech Blog",
		description:
			"A fitness web app that helps users track their workouts, set fitness goals, and monitor progress. It includes exercise logging, charts, and personalized recommendations.",
	},
	{
		id: "bookSearchEngine",
		githubUrl: "",
		productionUrl: "https://onrender.com/",
		image: {
			url: "https://onrender.com/",
			alt: "Book Search Engine Cover Image",
		},
		title: "Book Search Engine",
		description:
			"A web app for managing event invitations and RSVPs. Event organizers can create events, send invitations, and track attendee responses.",
	},
	{
		id: "socialNetworkAPI",
		githubUrl: "https://github.com/GuillerSaenz/APISocialNetwork",
		productionUrl: "https://onrender.com/",
		image: {
			url: "https://onrender.com/",
			alt: "Social Network API Cover Image",
		},
		title: "Social Network API",
		description:
			"A web app for managing event invitations and RSVPs. Event organizers can create events, send invitations, and track attendee responses.",
	},
	{
		id: "weatherDashboard",
		githubUrl: "https://github.com/GuillerSaenz/Weather-Dashboard",
		productionUrl: "https://onrender.com/",
		image: {
			url: "https://onrender.com/",
			alt: "Weather Dashboard Cover Image",
		},
		title: "Weather Dashboard",
		description:
			"A web app for managing event invitations and RSVPs. Event organizers can create events, send invitations, and track attendee responses.",
	},
];

export function Portfolio() {
	return (
		<div className="portfolio">
			<ul className="portfolio__grid">
				{projects.map((project) => (
					<Project
						key={project.id}
						githubUrl={project.githubUrl}
						productionUrl={project.productionUrl}
						image={{ url: project.image.url, alt: project.image.alt }}
						title={project.title}
						description={project.description}
					/>
				))}
			</ul>
		</div>
	);
}