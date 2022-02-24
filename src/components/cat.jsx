import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"I'm David, a bilingual Full Stack Developer with a background in entertainment, skilled at creating solutions. Relish helping people in all possible capacities with diverse communication skills and creative problem solving. A massive passion for seeing people smile and motivated by meaningful relationships.",
		education:
			"Quis ut voluptate irure est. Ex in velit nisi nostrud occaecat ipsum non quis ea. Ipsum deserunt est amet adipisicing sint nulla quis nostrud. Ullamco enim do incididunt amet elit qui sint excepteur sit irure elit reprehenderit qui excepteur. Laborum ea minim aliquip et laboris aliquip reprehenderit sunt cupidatat pariatur esse do. In sint magna laborum culpa officia cillum ex velit commodo. Laborum adipisicing laboris incididunt nulla aliquip.",
		projects: [
			{
				projectName: "Pick a Card",
				liveDemo: "pick-a-card-magic.vercel.app",
				linkToGithub: "https://github.com/aviakubo/pick-a-card-magic"
			},
			{
				projectName: "Magician's Inventory",
				liveDemo: "dyakubov-project2.herokuapp.com/inventory",
				linkToGithub: "https://github.com/aviakubo/dyakubov-project2"
			},
			{
				projectName: "Money Pal",
				liveDemo: "https://pensive-goodall-ea0925.netlify.app/",
				linkToGithub: "https://github.com/aviakubo/frontend-fin-team-six"
			}
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/aviakubo"
			},

			{
				platform: "LinkedIn",
				link: "https://www.linkedin.com/in/dannyyacks"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "projects" || lower === "project") {
				return (
					<React.Fragment>
						{this.information.projects.map(everyProject => {
							return (
								<p className="result">
									{everyProject.projectName}
									<a href={everyProject.liveDemo} target="#">
										Live Link
									</a>
									<a href={everyProject.linkToGithub} target="#">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contact me" ||
				lower === "contactme" ||
				lower === "contact_me" ||
				lower === "contact"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="#">
										{everySocial.platform}
									</a>
									<a href="https://github.com/aviakubo" target="#">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">Oops wrong input</p>;
			}
		} else {
			return <p className="result">Oops wrong input</p>;
		}
	};
}

export default Cat;
