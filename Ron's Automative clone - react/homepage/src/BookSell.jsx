import React from "react";
import { FaSearchDollar, FaDollarSign } from "react-icons/fa";

const BookSell = () => {
    return (
        <div className="booksell">

            <div className="booksell-cards">
                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <h3>Are You Looking For A Used Car ?</h3>
                            <FaSearchDollar />
                        </div>
                        <p>
                            Tired of finding desired car. Hold on! Visit our inventory and find
                            your favorite used car.
                        </p>
                        <button className="btn">Book Now</button>
                    </div>

                </div>

                <div className="card">
                    <div className="card-content">
                        <div className="card-icon">
                            <h3>Do You Want to Sell A Car ?</h3>

                            <FaDollarSign />
                        </div>
                        <p>
                            Ron's provides you the opportunity to trade your car without any
                            trouble. Just bring your car and get a fair exchange.
                        </p>
                        <button className="btn">Sell Now</button>
                    </div>

                </div>
            </div>


            <div className="booksell-bottom">
                <div className="video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/YAFUyPp_238?autoplay=1&mute=1&loop=1&playlist=YAFUyPp_238" title="BMW Cinematic" allow="autoplay; "></iframe>
                </div>


                <div className="fair-price">
                    <h3>Get A Fair Price For Your Car.</h3>
                    <p>Buy your favorite car in few easy steps</p>

                    <div className="steps">
                        <div className="step">
                            <span className="step-num">1</span>
                            <span>Select a Used Car</span>
                        </div>
                        <div className="step">
                            <span className="step-num">2</span>
                            <span>Fill Credit Application</span>
                        </div>
                        <div className="step">
                            <span className="step-num">3</span>
                            <span>Pay Down Payment</span>
                        </div>
                    </div>

                    <button className="btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BookSell;
