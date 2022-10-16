import React from "react";
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

// Redux
import { useSelector } from 'react-redux';
import { selectSections } from '../../redux/directory/directory.selector';

const Directory = () => {
	const sections = useSelector(selectSections)
	return(
		<div className="directory-menu">
		{sections.map(( {id , ...otherProps} ) =>
			<MenuItem key={id} {...otherProps} />
		)}
		</div>
	)
}



export default Directory;