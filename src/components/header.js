import React from 'react'
// import {
//     BrowserRouter as Router,
//     Link
// } from "react-router-dom";
// import profileComponent from './profileComponent'


class Header extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex justify-content-around">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="/itemsnavbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <a className="navbar-brand" href={"/items"}>Olx</a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <div className="input-group ml-1">
                                    <div className="d-flex justify-content-center">
                                        <label className="input-group-text " htmlFor="inputGroupSelect01">
                                            <i className="fas fa-search text-grey" aria-hidden="true" />
                                        </label>
                                    </div>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option defaultValue>Choose...</option>
                                        <option value={1}>One</option>
                                        <option value={2}>Two</option>
                                        <option value={3}>Three</option>
                                    </select>
                                </div>
                                <div className="input-group md-form form-sm form-2 pl-0">
                                    <input className="search-bar form-control my-0 py-1 amber-border" type="text"
                                        placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <span className="input-group-text amber lighten-3" id="basic-text1">
                                            <i className="search-icon fas fa-search text-grey" aria-hidden="true" /></span>
                                    </div>
                                </div>

                            </ul>

                            <div className="d-flex align-items-center ml-2">
                                <i className="msg fas fa-envelope mx-2"></i>
                                <i className="fas fa-bell mx-2"></i>
                                {/* <Router>
                                   {<Link to="/profile"> */}
                                <a href={"/profile"}>
                                    <img src="https://statics.olx.com.pk/external/base/img/avatar_2.png"
                                        onClick={() => this.setState({})} className="d-flex rounded-circle mx-2"
                                        height="40px" width="40px" alt="avatar" />
                                </a>
                                {/* </Link>}
                                </Router> */}
                            </div>
                            <button className="btn btn-primary mx-4 px-4">Sell</button>
                        </div>
                    </div>
                </nav >
                <ul className="nav container py-1">
                    <li className="nav-item">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                All Categories </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href={"/items"}>Phone</a>
                                <a className="dropdown-item" href={"/items"}>Computer</a>
                                <a className="dropdown-item" href={"/items"}>furniture</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>car</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>phone</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>assets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>furniture</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>accesories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>gadgets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>bike</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={"/items"}>others</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;