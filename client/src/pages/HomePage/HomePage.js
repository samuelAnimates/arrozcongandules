import React, { Component } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from '../../components/NextPageLink';
import Coverimage from "../../assets/images/coverimage.png"

class HomePage extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <div className="bg-color-255-239-183-p35 border-bottom-p75em-double-10-33-47 border-left-solid-1px-18-49-67 border-radius-4px border-right-solid-1px-18-49-67 display-inline-block padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em">
                                <h1>
                                <span>Arroz con Gandules</span>
                                <span className="display-block font-catamaran font-size-p5em font-weight-500">A recipe for Food Access Opportunities<br/>in Lawrence, MA</span>
                                </h1>
                            </div>
                        </div>
                        <div className="padding-top-2em text-center">
                            <img src={ Coverimage } alt="A plate of arroz con gandules, or rice with pigeon peas in English." className="max-width-300px width-75pc"></img>
                            <p className="font-sueEllenFrancisco font-size-2p75em">What's on your plate?</p>
                        </div>
                        
                    </Bookpage>
                    <Bookpage>
                        <h2>Table of Contents</h2>
                        <p>[Placeholder]</p>
                        <NextPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/FoodAccessMap"
                        />
                    </Bookpage>
                </DesktopBookLayout>
                <Footer
                    currentPage="Home"
                />
            </div>
        );
    };
}
  
export default HomePage;
