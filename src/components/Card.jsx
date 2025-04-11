import React from "react";
import { CARD_DATA } from "../utils/helper";

const Card = () => {
    console.log(CARD_DATA)
   
    return (
        <section className="min-vh-100  d-flex align-items-center justify-content-center flex-column">
            <div className="container">
                <div className="row">
                    {CARD_DATA.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-24 mb-lg-0" key={index}>
                            <div className="card">
                                <div className="position-relative">
                                    <img src={item.image} alt={item.name} className="w-100" />
                                    <div className="iconbox-container">
                                        <a href="https://www.facebook.com/" target="_blank" className="iconbox">
                                            <img src="../assets/img/svg/facebook.svg" alt="facebook"></img>
                                        </a>
                                        <div className="iconbox">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="../assets/img/svg/instagram.svg" alt="instagram" />
                                            </a>
                                        </div>
                                        <div className="iconbox">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src="../assets/img/svg/twiter.svg" class="twitter"></img>
                                            </a>
                                        </div>
                                        <div className="iconbox">
                                            <a href="https://www.shopsy.in/" target="_blank">
                                                <img src="public/assets/img/svg/doller.svg"class="doller"></img>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="name">{item.title}</p>
                                    <p className="ux">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Card;


