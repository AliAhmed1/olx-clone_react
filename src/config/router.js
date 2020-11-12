import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import HomeComponent from "../components/homeComponent";
import Header from "../components/header";
import Footer from "../components/footer"
import ProductSelectComponent from "../components/productSelectComponent";
import ProfileComponent from "../components/profileComponent";
import ItemsComponent from "../components/itemsComponent";


class router extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="">
                <Header />
                <Router>
                    <Route path="/" exact>
                        <HomeComponent />
                    </Route>
                    <Route path="/item">
                        <ProductSelectComponent/>
                    </Route>
                    <Route path="/items">
                        <ItemsComponent/>
                    </Route>
                    <Route path="/profile">
                        <ProfileComponent/>
                    </Route>
                </Router>
                <Footer />
            </div>
        );
    }

}

export default router;