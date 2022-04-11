import React from "react";
import tw from "twin.macro";
import {css} from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
//import guides from "../guides.js"
import topics from "../topics.js"

import GuideCard from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js"
import GetStarted from "../components/cta/GetStarted";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage disabled>
            <Header/>
            {topics.map((topic, index) => (
                <GuideCard heading={topic.heading} description={topic.description} steps={topic.steps}/>
            ))}
            <GetStarted text="Need more help, contact technical support" primaryLinkText="Report an issue"
                        primaryLinkUrl="https://gunaknhsrc.freshdesk.com/support/tickets/new" secondaryLinkText="Contact NHSRC"/>
            <Footer/>
        </AnimationRevealPage>
    );
}
