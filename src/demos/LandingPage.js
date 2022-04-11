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
import Laqshya from "../images/laqshya.png";
import Kayakalp from "../images/kayakalp.png";
import Musqan from "../images/musqan.png";
import Github from "../images/github.png";
import OpenSource from "../images/opensource.png";

const cards = [
    {
        imageSrc: ShieldIconImage,
        title: "NQAS",
        description: "National Quality Assurance Standards",
        link: "http://qi.nhsrcindia.org/national-quality-assurance-standards"
    },
    {
        imageSrc: Laqshya,
        title: "LAQSHYA",
        description: "Labour Room Quality Improvement Initiative",
        link: "http://nhm.gov.in/New_Updates_2018/NHM_Components/RMNCH_MH_Guidelines/LaQshya-Guidelines.pdf"
    },
    {
        imageSrc: Kayakalp,
        title: "KAYAKALP",
        description: "Swacchta Guidelines for Public Health Facilities",
        link: "https://www.nhp.gov.in/kayakalp-swacchta-guidelines-for-public-health-facilities_pg"
    },
    {
        imageSrc: Musqan,
        title: "MusQan",
        description: "Ensuring provision of timely, appropriate, quality and safe services to children",
        link: "http://qi.nhsrcindia.org/cms-detail/musqan-initiative/MjQ4"
    }
];

const techCards = [
    {
        imageSrc: OpenSource,
        company: "Tech Stack",
        type: "",
        title: "Java, ReactJS, React Native, PostgreSQL, Metabase, Linux",
        durationText: "",
        locationText: ""
    },
    {
        imageSrc: Github,
        company: "Source Code",
        type: "",
        title: "Fully available on Github",
        durationText: "",
        locationText: ""
    }
];

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    return (
        <AnimationRevealPage disabled>
            <Header/>
            <Hero primaryButtonUrl="/mobile" heading={"GUNAK - Guide for NQAS and Kayakalp"}
                  description={"Designed for Facility Staff, District, State, National teams and for Internal/External/Peer/ Surveillance Assessments"}
                  primaryButtonText={"Download Mobile App"}
                  watchVideoButtonText={"How it Works"}/>
            <Programs cards={cards}/>
            <Features
                subheading={<Subheading>Features</Subheading>}
                heading={
                    <>Complete facilities assessment platform</>
                }
                description={"Quality assessment, Data collection, Analysis, Mentoring"}
                cards={gunakFeatures}
            />
            <Technology subheading="" headingHtmlComponent="Gunak Software" description="Gunak has been developed completely using open source frameworks and components."
                        cards={techCards} cardLinkText="" linkText="Get Source Code" linkUrl="https://github.com/nhsrc"/>
            <Footer/>
        </AnimationRevealPage>
    );
}