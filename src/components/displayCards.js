import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Link

} from "react-router-dom";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}`}
            style={{ ...style, display: "block", backgroundColor: "black" , borderRadius: `50%` }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "black", borderRadius: `50%` }}
            onClick={onClick}
        />
    );
}


class DisplayCard extends React.Component {
    constructor() {
        super()

    }

    render() {
        var settingsOfslide = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container">
                <div className="carousal-card bg-light my-5">
                    <h4>Search for you</h4>
                    <Slider {...settingsOfslide}>
                        {this.props.products.map((value, index) => {
                            return (
                                <div key={index} className="card ">
                                    <Link to="/item" style={{ textDecoration: 'none' , color : 'black' }}>
                                        <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" className="card-img-top pt-2" alt="card" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </Slider>
                </div>


                <div className="card-show mt-5">
                    <h4>Fresh Recommendations</h4>
                    <div className="row my-3 mx-4">
                        {this.props.products.map((value, index) => {
                            return (
                                <div key={index} className="card col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                                    <Link to="/item" style={{ textDecoration: 'none',color : 'black' }}>
                                        <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" className="card-img-top pt-2" alt="card" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(DisplayCard);
