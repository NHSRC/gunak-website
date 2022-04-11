import React from "react";
import tw from "twin.macro";
import {css} from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Programs from "components/features/DashedBorderSixFeatures.js"
import Features from "components/features/ThreeColWithSideImage.js";
// import Technology from "components/cards/PortfolioTwoCardsWithImage.js"
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Download from "components/cta/DownloadApp.js"
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";


const cards = [
    {
        imageSrc: FastIconImage,
        title: "Offline Assessment",
        description: "Download checklists and perform assessment offline",
        link: "http://qi.nhsrcindia.org/national-quality-assurance-standards"
    },
    {
        imageSrc: SimpleIconImage,
        title: "Reports",
        description: "Generate assessment report on the device after completion",
        link: "http://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/LaQshya-Guidelines.pdf"
    },
    {
        imageSrc: ReliableIconImage,
        title: "Submit Assessment",
        description: "Submit assessment to the server for processing",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    },
    {
        imageSrc: ShieldIconImage,
        title: "Group Assessment",
        description: "Split assessment by department and assess jointly",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    },
    {
        imageSrc: CustomizeIconImage,
        title: "Download Checklist and Facilities",
        description: "Download universal or state specific checklists. Download facilities specific to each state.",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    }
];

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage disabled>
            <Header/>
            <Features
                subheading={<Subheading>Assessor Mobile App Features</Subheading>}
                heading={
                    <>
                        GUNAK provides <HighlightedText>Android and iOS</HighlightedText> apps
                    </>
                }
                description=""
                cards={cards}
            />
            <Download subheading="" text="Download and install assessor's mobile app" link1Url="https://apps.apple.com/in/app/gunak/id1354891968"
                      link2Url="https://play.google.com/store/apps/details?id=com.facilitiesassessment"/>
            <Hero primaryButtonText="User Guide" primaryButtonUrl="#/docs"
                  description="GUNAK is simple to use but you can use the documentation to understand how it works" heading="How to use GUNAK Mobile App">
            </Hero>
            <Footer/>
        </AnimationRevealPage>
    );
}
