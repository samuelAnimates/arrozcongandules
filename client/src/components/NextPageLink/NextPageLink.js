import React from "react";
import { Link } from "react-router-dom";
import "./NextPageLink.css";

const NextPageLink = props => (
	<div className="bottom-0 position-absolute right-p15em">
		<Link className={ "color-inherit font-catamaran padding-left-p1em padding-right-p1em a-color-scheme-" + props.colorSchemeSuffix } to={ props.urlPath }>
			Next Page
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="4 4 20 10"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
		</Link>
	</div>
);

export default NextPageLink;