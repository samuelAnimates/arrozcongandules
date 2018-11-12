import React, { Component } from 'react';
import './Recipes.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from "../../components/NextPageLink"
import PrevPageLink from "../../components/PrevPageLink"

class Recipes extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1>
                                Recipes
                            </h1>
                        </div>
                        <p>Body of Text</p>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/HealthyBodegas"
                        />
                    </Bookpage>
                    <Bookpage>
                        <div className="text-center">
                            <h2>Subtitle</h2>
                            <p>Body of Text</p>
                        </div>
                        <NextPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/Resources"
                        />
                    </Bookpage>
                </DesktopBookLayout>
                <Footer
                    currentPage="Recipes"
                />
            </div>
        );
    };
}
  
export default Recipes;
