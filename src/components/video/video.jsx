import React from "react";
import Heading from "../common/Heading";
import "./video.css";
import Logo from "../../assets/Icons/logo.png";
import brochure from "../../assets/Images/KRISHNA HERITAGE BROCHURE FINAL.pdf";

const Video = () => {
    return (
        <section className='video-section background'>
            <div className='container'>
                <Heading
                    title='Experience Narmada Developers'
                    subtitle='Discover the charm, elegance, and structural excellence that defines Narmada Developers.'
                />

                <div className='video-content'>
                    {/* Left: Video */}
                    <div className='video-left'>
                        <iframe
                            className='video-frame'
                            src='https://www.youtube.com/embed/YOUR_VIDEO_ID'
                            title='Krishna Heritage Walkthrough'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Right: Logo + Content */}
                    <div className='video-right'>
                        <div className='logo-text-split'>
                            <div className='logo-block'>
                                <img src={Logo} alt='Dev Group Logo' />
                            </div>
                            <div className='text-block'>
                                <h3>About Narmada Group</h3>
                                <p>
                                    Narmada group is a dynamic and ambitious real estate development company,
                                    established to transform the landscape of Karjat. With a focus on innovation,
                                    quality, and customer satisfaction, we aim to deliver exceptional living and working spaces.
                                </p>

                                <h4>Our Mission</h4>
                                <p>
                                    To create vibrant, sustainable, and inspiring communities, exceeding customer expectations
                                    through transparency, integrity, and excellence.
                                </p>
                                <a href={brochure} className="hero-btn" download>
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;
