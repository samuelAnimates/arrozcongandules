import React from "react";
import { Link } from "react-router-dom";
import "./PrevPageLink.css";

const PrevPageLink = props => (
	<div className="bottom-0 position-absolute left-p15em">
		<Link className={ "color-inherit font-catamaran padding-left-p1em padding-right-p1em a-color-scheme-" + props.colorSchemeSuffix } to={ props.urlPath }>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="4 4 20 10"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
			Prev Page
		</Link>
	</div>
);

export default PrevPageLink;