import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Constants
import {BUTTONS} from '../../../../constants/constants'

function ProjectCard (props) {

	let {project, activeLanguage} = props;

	let pathLang = activeLanguage === 'en' ? '/' + activeLanguage : '';

	return (
		<Link to={pathLang + '/projects/' + project._id} className="project-card" aria-label={project.name[activeLanguage]}>

			<figure className="img-container">
				<img className="img-fit" src={project.thumbnail} alt={project.name[activeLanguage]}/>
			</figure>

			<div className="project-info">
				<div>
					<p className='project-name'>{project.name[activeLanguage]}</p>
					<p className='cliche'>{project.description[activeLanguage]}</p>
				</div>
				<button className="btn" aria-label={BUTTONS[activeLanguage].more}>{BUTTONS[activeLanguage].more}</button>
			</div>

		</Link>
	);

}

export default ProjectCard;

ProjectCard.propTypes = {
	project: PropTypes.object,
	activeLanguage: PropTypes.string,
};