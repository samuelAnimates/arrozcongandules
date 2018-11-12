import React from "react";
import { Link } from "react-router-dom";
import "./Bookpage.css";

const Bookpage = props => (
	<div className="padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em width-50pc">
        <div className="bg-offwhite border-radius-4px border-solid-1px-18-49-67 height-100pc padding-bottom-p5em padding-left-p5em padding-right-p5em position-relative width-100pc">
            { props.children }
        </div>
    </div>
);

export default Bookpage;
