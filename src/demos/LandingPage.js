import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Header from "components/headers/light.js";
import Programs from "components/features/DashedBorderSixFeatures.js"
import Features from "components/features/ThreeColWithSideImage.js";
import Technology from "components/cards/PortfolioTwoCardsWithImage.js"
import Footer from "components/footers/SimpleFiveColumn.js";
import gunakFeatures from "../gunakfeatures.js"
import ShieldIconImage from "../images/nqas.png";
import Laqshya from "../images/laqshya.jpg";
import CustomizeIconImage from "../images/kayakalp.png";

const cards = [
    {
        imageSrc: ShieldIconImage,
        title: "NQAS",
        description: "National Quality Assurance Standards",
        link: "http://qi.nhsrcindia.org/national-quality-assurance-standards"
    },
    {imageSrc: Laqshya, title: "LAQSHYA", description: "Labour Room Quality Improvement Initiative", link: "http://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/LaQshya-Guidelines.pdf"},
    {imageSrc: CustomizeIconImage, title: "KAYAKALP", description: "Swacchta Guidelines for Public Health Facilities", link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"}
];

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage disabled>
            <Header/>
            <Hero primaryButtonUrl="/mobile" heading={"Gunak - National health facilities assessment platform"}
                  description={"Designed for all hospital administration, state health department, and quality assessors"} primaryButtonText={"Download Mobile App"}
                  watchVideoButtonText={"How it Works"}/>
            <Programs cards={cards}/>
            <Features
                subheading={<Subheading>Features</Subheading>}
                heading={
                    <>
                        We have Amazing <HighlightedText>Service.</HighlightedText>
                    </>
                }
                cards={gunakFeatures}
            />
            <Technology/>
            <Footer/>
        </AnimationRevealPage>
    );
}
