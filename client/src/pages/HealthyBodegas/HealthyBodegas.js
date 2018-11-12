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
                            urlPath="/FoodAccessOverview"
                        />
                    </Bookpage>
                    <Bookpage>
                        <div className="text-center">
                            <h2>Subtitle</h2>
                            <p>Body of Text</p>
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
