import React from 'react'
import Internet from "../../public/img/internet.png"
import Transfer from "../../public/img/transfer.png"
import Head from "../../public/img/head.png"

const About = () => {
    return (
        <main className="main">
            <div className="main-container">
                <div className="about-description">
                    <div className="description-header">
                        <h2>About Us</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                    </div>
                    <div className="description-list">
                        <div className="description-item">
                            <div className="item-image">
                                <img src={Internet}></img>
                            </div>
                            <div className="item-header">Awesome Icons</div>
                            <div className="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="description-item">
                            <div className="item-image">
                                <img src={Transfer}></img>
                            </div>
                            <div className="item-header">One Page</div>
                            <div className="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className="description-item">
                            <div className="item-image">
                                <img src={Head}></img>
                            </div>
                            <div className="item-header">Fully Responsive</div>
                            <div className="item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-pricing">
                    <div className="about-pricing-container">
                        <div className="pricing-header">
                            <h2>Pricing Plan</h2>
                            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
                        </div>
                        <div className="pricing-offers">
                            <div className="free-offer">
                                <div className="offer-header">
                                    <p>Free Trail</p>
                                    <p>00 per month</p>
                                </div>
                                <div className="offer-description">
                                    <p>30 Free Trail</p>
                                    <p>5 Free Projects</p>
                                    <p>PHP 5 Enabled</p>
                                    <p>24/7 Supports</p>
                                </div>
                                <div className="offer-button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                            <div className="basic-offer">
                                <div className="offer-header">
                                    <p>Basic</p>
                                    <p>50 per month</p>
                                </div>
                                <div className="offer-description">
                                    <p>30 Free Trail</p>
                                    <p>5 Free Projects</p>
                                    <p>PHP 5 Enabled</p>
                                    <p>24/7 Supports</p>
                                </div>
                                <div className="offer-button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                            <div className="ultimates-offer">
                                <div className="offer-header">
                                    <p>Ultimates</p>
                                    <p>99 per month</p>
                                </div>
                                <div className="offer-description">
                                    <p>30 Free Trail</p>
                                    <p>5 Free Projects</p>
                                    <p>PHP 5 Enabled</p>
                                    <p>24/7 Supports</p>
                                </div>
                                <div className="offer-button">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-team">

                </div>
            </div>
        </main>
    )
}

export default About
