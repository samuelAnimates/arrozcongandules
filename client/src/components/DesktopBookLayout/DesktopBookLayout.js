import React from "react";
import "./DesktopBookLayout.css";

const DesktopBookLayout = props => (
	<div className="background-paper min-height-100vh-calc2p5em padding-bottom-2p5em overflow-y-scroll width-100pc">
        <main className="display-flex align-items-stretch flex-direction-row height-100pc min-height-100vh-calc2p5em width-100pc">
            { props.children }
        </main>
    </div>
);

export default DesktopBookLayout;