import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import {
    Link

} from "react-router-dom";


const AnyReactComponent = ({ text }) => <div>{text}</div>;

//https://statics.olx.com.pk/external/base/img/avatar_2.png  //Avatar

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}`}
        style={{ ...style, display: "block", background: "black" ,borderRadius : `50%`}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" ,borderRadius : `50%`}}
        onClick={onClick}
      />
    );
  }

class ProductSelectComponent extends Component {
    constructor(props) {
        super()
    }
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };

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
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">
                        <div className="card">
                            <div className="mb-5 itemSlider px-5">
                                <Slider {...settings}>
                                    <div>
                                        <img src={"https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"} alt={"slider"} />
                                    </div>
                                    <div>
                                        <img src={"https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"} alt={"slider"} />
                                    </div>
                                    <div>
                                        <img src={"https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"} alt={"slider"} />
                                    </div>
                                    <div>
                                        <img src={"https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"} alt={"slider"} />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        {/* <div className="col"> */}
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Details</h5>
                                <p className="card-subtitle mt-3">this is Details</p>
                                <hr></hr>
                                <h5 className="card-title">Description</h5>
                                <p className="card-subtitle mt-3">this is Description</p>

                            </div>
                            {/* </div> */}
                        </div>
                        <div className="card mt-2">
                    <div className="relatedSlider mt-4 mb-5 px-5">
                        <h4>Related Ad</h4>
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
                </div>
                    </div>

                    <div className="col-sm-12 col-lg-4 col-md-4">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Price</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Product Details</h6>
                                <p className="card-text">Location</p>
                                <div className="collapse-content">
                                    {/* Text */}
                                    {/* Button */}
                                    <a className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed" data-toggle="collapse" href="#collapseContent" aria-expanded="false" aria-controls="collapseContent" />
                                    <i className="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post" />
                                    <i className="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it" />
                                </div>
                            </div>
                        </div>
                        <div className="card promoting-card">
                            {/* Card content */}
                            <h5 className="card-title font-weight-bold mx-3 mt-3">Seller Description</h5>
                            <div className="card-body d-flex flex-row">
                                {/* Avatar */}
                                <img src="https://statics.olx.com.pk/external/base/img/avatar_2.png" className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
                                {/* Content */}
                                <div>
                                    {/* Title */}
                                    <h4 className="card-title font-weight-bold mb-1">Name</h4>
                                    {/* Subtitle */}
                                    <p className="card-text">Member since</p>

                                </div>

                            </div>
                            {/* Card image */}
                            <div className="view overlay">

                            </div>
                            {/* Card content */}
                            <div className="card-body d-flex justify-content-center row">
                                <button type="button" className="btn btn-primary col mx-3">Chat with Seller</button>

                            </div>
                        </div>

                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Posted In</h5>
                                <h6 className="card-subtitle mb-2 text-muted">karachi,sindh</h6>
                                <div className="mx-auto" style={{ height: '25vh', width: '19rem' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{
                                            key: 'AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=judmNG1CyEG2rr4e37WeVwG3NZw=',
                                            language: 'en'
                                        }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <AnyReactComponent
                                            lat={59.955413}
                                            lng={30.337844}
                                            text="My Marker"
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(ProductSelectComponent);