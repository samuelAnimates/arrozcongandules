import React, { Component } from 'react';
import './FoodAccessMap2.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from "../../components/DesktopBookLayout/DesktopBookLayout";
import NextPageLink from "../../components/NextPageLink"
import FoodAccessOpportunitiesMapImage from "../../assets/images/foodaccessopportunitiesmap.png"
import Barchart from "../../assets/images/barchart.jpg"
import PrevPageLink from "../../components/PrevPageLink"

class FoodAccessMap2 extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1 className="padding-top-p5em text-center">
                                Food Access Opportunities
                            </h1>
                        </div>
                        <img className="padding-top-3em max-width-400px width-100pc" src={ FoodAccessOpportunitiesMapImage } alt=""></img>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/foodAccessMap"
                        />
                    </Bookpage>
                    <Bookpage>
                    <div>
                            <h2 className="padding-top-p5em text-center">
                                What if food access maps focused on opportunities?
                            </h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                Many stores in Lawrence accept payment through food assistance programs like the <span className="font-weight-700">Supplemental Nutrition Assitance Program (SNAP)</span> and the <span className="font-weight-700">Women, Infants, and Children nutrition program (WIC)</span>. 
                                By definition, these <span className="font-weight-700">SNAP/WIC</span> retailers stock or sell a significant amount of produce, dairy, meat, and breads/cereals.
                            </p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                The federal government already invests resources to increase food access through <span className="font-weight-700">SNAP/WIC</span> retailers. 
                                These retailers already invest their own resources to meet <span className="font-weight-700">SNAP/WIC</span> requirements. 
                                What is the solution this Food Access Opportunities Map suggests? 
                                Work through a constellation of retailers varying in size, rather than focusing on individual large supermarkets.
                            </p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                How can we support <span className="font-weight-700">SNAP/WIC</span> retailers to improve local food access even more? 
                                How can we support more stores to become <span className="font-weight-700">SNAP/WIC</span> retailers?
                            </p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                This Food Access Opportunities framework highlights the resources that already exist in close proximity to people's homes. 
                                It also gives researchers room to consider the unique aspects of small businesses like many of these retailers, especially in the context of Lawrence.
                            </p>
                            <img className="max-width-400px width-100pc" src={ Barchart } alt="The percentage of women, Hispanic, and Black-owned firms in Lawrence is significantly higher than in the rest of the state."></img>
                        </div>
                        <NextPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/healthyBodegas"
                        />
                    </Bookpage>
                </DesktopBookLayout>
                <Footer
                    currentPage="FoodAccessMap2"
                />
            </div>
        );
    };
}
  
export default FoodAccessMap2;
