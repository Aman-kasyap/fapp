import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {  faPhoneAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function SocialFollow() {
    return (
        <>
            <footer>
                <div className="container-fluid">

                    <div className="col-md-12">


                        <p>
                            <text style={{ fontWeight: 'bold' }} >     C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</text><br />
                            <br />CHEMICALS & PROCESS POWER WATER & WASTE  WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>




                    </div>
                </div>
                <div className="container-fluid">
                <div className="row" style={{backgroundColor:'red',paddingLeft:'54px',paddingTop:'17px',height:'122px'}}>
                    <div className="col-md-4">
                    <a href="https://www.facebook.com/learnbuildteach/"
                                    className=" socialfollow" >

                                    <FontAwesomeIcon icon={faPhoneAlt} size="2x" />



                                </a>
                                <span style={{ color: 'white' }}>Toll free 18002001234</span>
                                </div>

                        <div className="col-md-4">
                        <a href="https://www.facebook.com/learnbuildteach/"
                                    className=" socialfollow" >

                                    <FontAwesomeIcon icon={faFacebook} size="2x" />


                                </a>
                                <span style={{ color: 'white' }}>www.facebook.com/cripumps</span>
                                </div>

                            <div className="col-md-4">
                            <a href="https://www.google.com"
                                    className=" socialfollow" >

                                    <FontAwesomeIcon icon={faGlobe} size="2x" />


                                </a>
                                <span style={{ color: 'white' }}>www.crigroup.com</span>
                                </div>




                            </div>


                        </div>
                 
                







            </footer>

        </>
    );
}