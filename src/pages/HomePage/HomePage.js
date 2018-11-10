import React, { Component } from 'react';
import './HomePage.css';
import { Link } from "react-router-dom";
import Bookpage from "../../components/Bookpage";
import Footer from "../../components/Footer";
import InlineA from "../../components/InlineA";
import DesktopBookLayout from '../../components/DesktopBookLayout/DesktopBookLayout';
import NextPageLink from '../../components/NextPageLink';

class HomePage extends Component {
    render() {
        return (
            <div>
                <DesktopBookLayout>
                    <Bookpage>
                        <div className="margin-top-3em text-center">
                            <div className="bg-color-255-239-183-p35 border-bottom-p75em-double-10-33-47 border-left-solid-1px-18-49-67 border-radius-4px border-right-solid-1px-18-49-67 display-inline-block padding-bottom-p75em padding-left-p75em padding-right-p75em padding-top-p75em">
                                <h1>
                                <span>Arroz con Gandules</span>
                                <span className="display-block font-catamaran font-size-p5em font-weight-500">A recipe for food access<br/>in Lawrence, MA</span>
                                </h1>
                            </div>
                        </div>
                        <p>Body of Text</p>
                    </Bookpage>
                    <Bookpage>
                        <h1>Table of Contents</h1>
                        <p>Body of Text</p>
                        <NextPageLink
                            colorSchemeSuffix = "default"
                            urlPath="/FoodAccessOverview"
                        />
                    </Bookpage>
                </DesktopBookLayout>
                <Footer/>
            </div>
        );
    };
}
  
export default HomePage;
