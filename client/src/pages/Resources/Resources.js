import React, { Component } from 'react';
import './Resources.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import PrevPageLink from "../../components/PrevPageLink"

class Resources extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1>
                                Resources
                            </h1>
                        </div>
                        <p>Body of Text</p>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/Recipes"
                        />
                    </Bookpage>
                    <Bookpage>
                    <div className="text-center">
                            <h2 className="padding-top-p5em text-center">Data Sources</h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">Links to public data sources we used</p>
                            <h2 className="padding-top-p5em text-center">Downloads/API/Source Code</h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">Links to any technical resources we can offer for researchers, programmers, and policy makers</p>
                            <h2 className="padding-top-p5em text-center">WIC/SNAP/Supermarkets</h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">Links to to WIC/SNAP retail locators, retailer applications, grocery store locators, etc.</p>
                    </div>
                    </Bookpage>
                </DesktopBookLayout>
                <Footer
                    currentPage="Resources"
                />
            </div>
        );
    };
}
  
export default Resources;
