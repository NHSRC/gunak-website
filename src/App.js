import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import UserGuide from "demos/UserGuide.js";
import FAQ from "components/faqs/SingleCol.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Mobile from "demos/MobilePage.js";
import Dashboard from "demos/DashboardPage.js";

import LandingPage from "demos/LandingPage.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/faqs">
                    <FAQ/>
                </Route>
                <Route exact path="/docs">
                    <UserGuide/>
                </Route>
                <Route exact path="/download">
                    <DownloadApp/>
                </Route>
                <Route exact path="/mobile">
                    <Mobile/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route exact path="/">
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    );
}
