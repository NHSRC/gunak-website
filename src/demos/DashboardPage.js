import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js"
import Footer from "components/footers/SimpleFiveColumn.js";
import GetStarted from "components/cta/GetStarted.js";
import Features from "../components/features/ThreeColWithSideImage";
import {Subheading} from "../components/misc/Headings";
import FastIconImage from "../images/fast-icon.svg";
import SimpleIconImage from "../images/simple-icon.svg";
import ReliableIconImage from "../images/reliable-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomizeIconImage from "../images/customize-icon.svg";

const cards = [
    {
        imageSrc: FastIconImage,
        title: "Monitor the assessment activity",
        description: "...by facility type, district, assessment type, program",
        link: "http://qi.nhsrcindia.org/national-quality-assurance-standards"
    },
    {
        imageSrc: SimpleIconImage,
        title: "Score Statistics",
        description: "Get highest, lowest, median, and average score of health facilities",
        link: "http://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/LaQshya-Guidelines.pdf"
    },
    {
        imageSrc: ReliableIconImage,
        title: "Download complete assessment",
        description: "...in csv/excel format",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    },
    {
        imageSrc: ShieldIconImage,
        title: "Visualise trend",
        description: "...of improvement in different facilities",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    },
    {
        imageSrc: CustomizeIconImage,
        title: "Identify strength and weakness areas",
        description: "...by area of concern, standard, and departments",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    }
];


export default () => {
    //const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage disabled>
            <Header/>
            <Features
                subheading={<Subheading></Subheading>}
                heading={
                    <>State Dashboard Features</>
                }
                description=""
                cards={cards}
            />
            <GetStarted text="Login to view your state's dashboard" primaryLinkText="Login" primaryLinkUrl="https://gunak.nhsrcindia.org/dashboard/index.html" secondaryLinkText="Request Account"/>
            <Footer/>
        </AnimationRevealPage>
    );
}
