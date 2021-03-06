import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import UserGuide from "demos/UserGuide.js";
import FAQ from "components/faqs/SingleCol.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Mobile from "demos/MobilePage.js";
import Dashboard from "demos/DashboardPage.js";

import LandingPage from "demos/LandingPage.js";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
    console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
    return (
        // <Router>
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path={`/docs`}>
                    <UserGuide/>
                </Route>
                <Route path="/download">
                    <DownloadApp/>
                </Route>
                <Route path="/mobile">
                    <Mobile/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/" exact>
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    );
}
