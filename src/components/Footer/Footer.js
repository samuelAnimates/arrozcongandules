import React from "react";
import InlineA from "../InlineA";
import "./Footer.css";

const Footer = props => (
	<footer class="bg-color-222-239-247 border-top-p75em-double-10-33-47 bottom-0 color-10-33-47 display-flex flex-direction-row font-catamaran font-size-p8em height-2p75em justify-content-center position-fixed width-100pc">
        <nav className="position-relative top-p5em">
            <InlineA
                colorSchemeSuffix="default"
                isInternalLink={ true }
                text="Home"
                urlPath="/"
            />
            <InlineA
                colorSchemeSuffix="default"
                isInternalLink={ true }
                text="Food Access"
                urlPath="/FoodAccessOverview"
            />
        </nav>
    </footer>
);

export default Footer;