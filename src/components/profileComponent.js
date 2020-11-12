import React, { Component } from "react";
import { connect } from 'react-redux';
import {
    Link

} from "react-router-dom";
class profileComponent extends Component {

    render() {
        return (
            <div>

                <div className="container mt-5">
                    <div className="row">

                        <div className="col-sm-12 col-lg-4 col-md-4">
                            <div className="text-center">
                                <img src="https://statics.olx.com.pk/external/base/img/avatar_2.png" className="rounded-circle" height="200px" width="200px" alt="avatar" />
                                <button type="button" className="btn btn-primary col-6">Follow</button>
                            </div>

                            <div className="card mt-4">
                                <div className="d-flex bg-light">
                                    <h6 className="p-1 pl-2">LINKED ACCOUNT</h6>
                                </div>
                                <div className="p-2">
                                    <p className="card-text">GOOGLE</p>
                                    <p className="card-text">PHONE NUMBER</p>
                                    <p className="card-text">EMAIL</p>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <div className="d-flex bg-light">
                                    <h6 className="p-1 pl-2">FRIENDS</h6>
                                </div>
                                <div className="p-2">
                                    <p className="card-text">FOLLOWERS</p>
                                    <p className="card-text">FOLLOWING</p>
                                    <p className="card-text">MUTUAL FRIENDS</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-lg-8">
                            <h2>Name</h2>
                            <hr></hr>
                            <div className="card-show mt-2">
                                <h4>Published Ads</h4>
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

export default connect(mapStateToProps)(profileComponent);
