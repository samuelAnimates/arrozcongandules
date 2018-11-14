import React, { Component } from 'react';
import './HealthyBodegas.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from "../../components/NextPageLink"
import PrevPageLink from "../../components/PrevPageLink"

class HealthyBodegas extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1>
                                Healthy Bodegas
                            </h1>
                        </div>
                        <p>Body of Text</p>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/foodAccessOpportunities"
                        />
                    </Bookpage>
                    <Bookpage>
                    <div>
                            <h2 className="padding-top-p5em text-center">
                                A Limited View
                            </h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                Maps of food access might just reinforce preconceived notions. 
                                Most people looking at these maps probably have an idea of what areas are under-served. 
                                These maps tend to point out problems that won't really suprise a lot of people. 
                                But what do they do to point out potential solutions?
                            </p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                The USDA defines "food access" in terms of access to large supermarkets. 
                                A "food desert" is an area without access to a large supermarket. 
                                What's the solution suggested by this definition of food access? 
                                It probably involves building more supermarkets until the food deserts on the map disappear.
                            </p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                Supermarkets can be valuable places to buy groceries. But we know there's a lot more to the story than that.
                            </p>
                        </div>
                        <NextPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/Recipes"
                        />
                    </Bookpage>
                </DesktopBookLayout>
                <Footer
                    currentPage="HealthyBodegas"
                />
            </div>
        );
    };
}
  
export default HealthyBodegas;