import React from "react";
import "./Team.css";
function Team(){
    return(
        <section className="section-white">
            <h1 className="section-title">
                Our passionate and driven team
            </h1>
            <div className="container">
                <div className="row">
                    <div className="rowtwo">
                        <div className="row-sm-6 col-md-4">
                            <div className="team-item">
                                <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' className="team-img"></img>
                                <h2>Krish Thakrar</h2>
                                <div className="team-info">
                                    <p>Front-End Developer</p>
                                    <div className="social-media">
                                        <ul className="team-icon">
                                            <li>
                                                <a href="https://www.linkedin.com/in/krish-thakrar-a93144236/" className="linkedin">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="instagram">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' className="team-img"></img>
                                <h2>Abhilash Bora</h2>
                                <div className="team-info">
                                    <p className="role">Front-End Developer</p>
                                    <div className="social-media">
                                        <ul className="team-icon">
                                            <li>
                                                <a href="https://www.linkedin.com/in/abhilash-bora/" className="linkedin">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="instagram">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rowtwo">
                        <div className="row-sm-6 col-md-4">
                            <div className="team-item">
                                <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' className="team-img"></img>
                                <h2>Mahim Gupta</h2>
                                <div className="team-info">
                                    <p>Back-End Developer</p>
                                    <ul className="team-icon">
                                        <li>
                                            <a href="https://www.linkedin.com/in/mahim-gupta73/" className="linkedin">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="instagram">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">
                                <img src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' className="team-img"></img>
                                <h2>Sidhharth Rodrigues</h2>
                                <div className="team-info">
                                    <p>Back-End Developer</p>
                                    <div className="social-media">
                                    <div className="social-media">
                                        <ul className="team-icon">
                                            <li>
                                                <a href="https://www.linkedin.com/in/dorddis/" className="linkedin">
                                                    <i className="fa-brands fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="instagram">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;