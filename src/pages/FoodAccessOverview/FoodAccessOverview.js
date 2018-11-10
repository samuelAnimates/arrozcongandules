import React, { Component } from 'react';
import './FoodAccessOverview.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import PrevPageLink from "../../components/PrevPageLink"

class FoodAccessOverview extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1>
                                Food Access Overview
                            </h1>
                        </div>
                        <p>Body of Text</p>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/"
                        />
                    </Bookpage>
                    <Bookpage>
                    <div className="text-center">
                        <h1>Table of Contents</h1>
                        <p>Body of Text</p>
                    </div>
                    </Bookpage>
                </DesktopBookLayout>
                <Footer/>
            </div>
        );
    };
}
  
export default FoodAccessOverview;
