import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Link

} from "react-router-dom";


{/* <i className="fas fa-angle-down rotate-icon" /> */ }
class itemsComponent extends Component {

    render() {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">

                        <div className="col-sm-12 col-lg-4 col-md-4">


                            <h6 className="ml-4 mt-4">Filters</h6>
                            <hr></hr>
                            <div className="d-flex flex-column mt-2">

                                <div>
                                    <a className="btn d-flex mx-2" data-toggle="collapse" href="#collapseExample1"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        <h6>CATEGORIES</h6> <i className="fas fa-angle-down rotate-icon d-flex align-self-end ml-auto" /> </a>
                                </div>
                                {/* / Collapse buttons */}
                                {/* Collapsible element */}
                                <div className="collapse " role="tablist" aria-multiselectable="true" id="collapseExample1">
                                    <div className="mt-3">
                                        <ul className="list-unstyled ml-4">
                                            <li><b>All Categories</b></li>

                                            <ul className="list-unstyled ml-4">
                                                <li></li>


                                            </ul>

                                        </ul>


                                    </div>
                                </div>
                                {/* / Collapsible element */}
                            </div>
                            <hr></hr>

                            <div className="d-flex flex-column mt-2">

                                <div>
                                    <a className="btn d-flex mx-2" data-toggle="collapse" href="#collapseExample2"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        <h6>LOCATIONS</h6> <i className="fas fa-angle-down rotate-icon d-flex align-self-end ml-auto" /> </a>
                                </div>
                                {/* / Collapse buttons */}
                                {/* Collapsible element */}
                                <div className="collapse" id="collapseExample2">
                                    <div className="mt-3">
                                        <ul className="list-unstyled ml-4">
                                            <li><b>pakistan</b></li>

                                            <ul className="list-unstyled ml-4">
                                                <li className="text-muted">Sindh</li>
                                                <li className="text-muted">Balochistan</li>
                                                <li className="text-muted">KpK</li>

                                            </ul>

                                        </ul>
                                    </div>
                                </div>
                                {/* / Collapsible element */}
                            </div>
                            <hr></hr>

                            <div className="d-flex flex-column mt-2">

                                <div>
                                    <a className="btn d-flex mx-2" data-toggle="collapse" href="#collapseExample3"
                                        aria-expanded="false" aria-controls="collapseExample">
                                        <h6>PRICE</h6> <i className="fas fa-angle-down rotate-icon d-flex align-self-end ml-auto" /> </a>
                                </div>
                                {/* / Collapse buttons */}
                                {/* Collapsible element */}
                                <div className="collapse" id="collapseExample3">
                                    <div className="mt-3">
                                        <div className="d-flex mx-2">
                                            <input type="number" placeholder={"Min"} className="col-4"></input>
                                            <input type="number" placeholder={"Max"} className="col-4 ml-2"></input>
                                            <button className="px-3 ml-2 text-center"><i className="fas fa-angle-right rotate-icon" /></button>
                                        </div>

                                    </div>
                                </div>
                                {/* / Collapsible element */}
                            </div>


                        </div>

                        <div className="col-12 col-md-8 col-lg-8">
                            <h6 className="mt-2">Ads in pakistan</h6>
                            <hr></hr>
                            <div className="card-show mt-2">
                                <div className="row my-3 mx-4">
                                    {this.props.products.map((value, index) => {
                                        return (
                                            <div key={index} className="card col-12 col-sm-6 col-md-6 col-lg-4 my-2">
                                                <Link to="/item" style={{ textDecoration: 'none', color: 'black' }}>
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


                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products
})

export default connect(mapStateToProps)(itemsComponent);
