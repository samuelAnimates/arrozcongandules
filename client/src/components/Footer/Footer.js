import React from "react";
import InlineA from "../InlineA";
import "./Footer.css";

const Footer = props => (
	<footer class="bg-color-222-239-247 border-top-p75em-double-10-33-47 bottom-0 color-10-33-47 font-catamaran font-size-p8em height-2p75em position-fixed width-100pc">
         <nav role="navigation" className="position-relative top-p5em">
            { props.currentPage === "Home" &&
                <ul className="display-flex flex-direction-row justify-content-center">
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Home</span>
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access"
                            urlPath="/FoodAccessMap"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access Opportunities"
                            urlPath="/foodAccessOpportunities"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Healthy Bodegas"
                            urlPath="/HealthyBodegas"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Recipes"
                            urlPath="/Recipes"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Resources"
                            urlPath="/Resources"
                        />
                    </li>
                </ul>
            }
            { props.currentPage === "FoodAccessMap" &&
                <ul className="display-flex flex-direction-row justify-content-center">
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Home"
                            urlPath="/"
                        />
                    </li>
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Food Access</span>
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access Opportunities"
                            urlPath="/foodAccessOpportunities"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Healthy Bodegas"
                            urlPath="/HealthyBodegas"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Recipes"
                            urlPath="/Recipes"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Resources"
                            urlPath="/Resources"
                        />
                    </li>
                </ul>
            }
            { props.currentPage === "FoodAccessMap2" &&
                <ul className="display-flex flex-direction-row justify-content-center">
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Home"
                            urlPath="/"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access"
                            urlPath="/FoodAccessMap"
                        />
                    </li>
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Food Access Opportunities</span>
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Healthy Bodegas"
                            urlPath="/HealthyBodegas"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Recipes"
                            urlPath="/Recipes"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Resources"
                            urlPath="/Resources"
                        />
                    </li>
                </ul>
            }
            { props.currentPage === "HealthyBodegas" &&
                 <ul className="display-flex flex-direction-row justify-content-center">
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Home"
                            urlPath="/"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access"
                            urlPath="/FoodAccessMap"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access Opportunities"
                            urlPath="/foodAccessOpportunities"
                        />
                    </li>
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Healthy Bodegas</span>
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Recipes"
                            urlPath="/Recipes"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Resources"
                            urlPath="/Resources"
                        />
                    </li>
                </ul>
            }
            { props.currentPage === "Recipes" &&
                 <ul className="display-flex flex-direction-row justify-content-center">
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Home"
                            urlPath="/"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access"
                            urlPath="/FoodAccessMap"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access Opportunities"
                            urlPath="/foodAccessOpportunities"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Healthy Bodegas"
                            urlPath="/HealthyBodegas"
                        />
                    </li>
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Recipes</span>
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Resources"
                            urlPath="/Resources"
                        />
                    </li>
                </ul>
            }
            { props.currentPage === "Resources" &&
                 <ul className="display-flex flex-direction-row justify-content-center">
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Home"
                            urlPath="/"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access"
                            urlPath="/FoodAccessMap"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Food Access Opportunities"
                            urlPath="/foodAccessOpportunities"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Healthy Bodegas"
                            urlPath="/HealthyBodegas"
                        />
                    </li>
                    <li role="menuitem">
                        <InlineA
                            colorSchemeSuffix="default"
                            isInternalLink={ true }
                            text="Recipes"
                            urlPath="/Recipes"
                        />
                    </li>
                    <li aria-current="page" role="menuitem">
                        <span className="border-solid-1p5px-0-0-0-0 display-inline-block padding-left-p1em padding-right-p1em text-decoration-underline">Resources</span>
                    </li>
                </ul>
            }
        </nav>
    </footer>
);

export default Footer;