import React, { Component } from 'react';
import './HealthyBodegas.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from "../../components/NextPageLink"
import PrevPageLink from "../../components/PrevPageLink"
import HealthyBodegasMapImage from "../../assets/images/placeholderbodegas.png"

class HealthyBodegas extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="text-center">
                            <h1 className="padding-top-p5em text-center">
                                Healthy Bodegas
                            </h1>
                            <img className="padding-top-3em max-width-400px width-100pc" src={ HealthyBodegasMapImage } alt=""></img>
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
                                Healthy on the Block, Bodegas Saludables
                            </h2>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">Bodegas are an integral part of Latino community life in this racially and culturally diverse city of more than 80,200. There are at least 85 such sundry shops in an area spanning just a little more than 7.4 square miles.</p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">But while Lawrence’s bodegas offer a wide variety of food from South and Central America, fresh fruits and vegetables have long been absent from local shelves. Because of their small size, many bodegas don’t have the means to buy or store fresh produce. As a result, many of the city’s poor who don’t have a car to reach the few supermarkets that are on the edge of the city suffer from a dearth of healthy food options. More than 45 percent of children in the Lawrence school district were overweight or obese, according to a 2010 report by the state Department of Public Health, likely from unhealthy or unbalanced diets.</p>
                            <p className="padding-bottom-p5em padding-top-p5em text-left">To combat the problem, Lawrence General Hospital and the city started a program called Healthy on the Block/Bodegas Saludables. With Lawrence General providing funding, the city, led by the Mayor’s Health Task Force, targeted the neighborhood convenience store as the place to make the biggest impact. Two other partners, Groundwork Lawrence and Mill Cities Community Investments, identified possible improvements to participating bodegas and provided consulting assistance for shopkeepers.</p> 
                            <p className="padding-bottom-p5em padding-top-p5em text-left">
                                The program started with just a few participants in 2015, but now more than two dozen bodegas provide some selection of fresh produce. In addition to refrigeration, funding is being used to properly display and label the produce to make it appealing to customers. And customers are noticing. In many of the bodegas, the fruits and vegetables greet shoppers at the front of the store. At El Mello Supermarket on Park Street, cartons containing bananas, avocados, grapes, melons, and pineapples line the narrow walkways.
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
