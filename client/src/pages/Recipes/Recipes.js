import React, { Component } from 'react';
import './Recipes.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from "../../components/NextPageLink"
import PrevPageLink from "../../components/PrevPageLink"
import RecipesImage from "../../assets/images/placeholderrecipes.png"

class Recipes extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1 className="padding-top-p5em text-center">
                                Recipes
                            </h1>
                            <img className="padding-top-3em max-width-400px width-100pc" src={ RecipesImage } alt=""></img>
                        </div>
                        <p>Body of Text</p>
                        <PrevPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/HealthyBodegas"
                        />
                    </Bookpage>
                    <Bookpage>
                        <div className="text-center">
                            <h2 className="padding-top-p5em text-center">Instructions</h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">Recipe instructions, ingredients, and cost a particular bodega.</p>
                            <h2 className="padding-top-p5em text-center">Personal Story</h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">A person's personal story about that bodega and/or recipe.</p>
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
