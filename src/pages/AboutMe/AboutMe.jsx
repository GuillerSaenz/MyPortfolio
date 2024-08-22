import "./AboutMe.css";

export function AboutMe() {
	return (
		<div className="aboutMe">
			<div className="aboutMe__content">
				<img
					src="https://i.pinimg.com/736x/e8/cb/50/e8cb5012f2a28027b71c5f6cd5afee44.jpg"
					className="aboutMe__image"
					alt="Guillermo Sáenz"
				/>
				<p className="aboutMe__greeting">Hello! I am</p>
				<h1 className="aboutMe__name">Guillermo Sáenz</h1>
				<p className="aboutMe__tags">Computer Science Student</p>
				<p className="aboutMe__description">
					Hello, my name is Guillermo Sáenz and I am a hard-working and driven individual who isn&apos;t afraid to face a challenge.
					I&apos;m passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who
					doesn&apos;t believe in misleading other people and tries to be fair in everything I do.
				</p>
			</div>
		</div>
	);
}