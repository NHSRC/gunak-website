import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Programs from "components/features/DashedBorderSixFeatures.js"
import Features from "components/features/ThreeColWithSideImage.js";
// import Technology from "components/cards/PortfolioTwoCardsWithImage.js"
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Download from "components/cta/DownloadApp.js"

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
      <Header />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <Download />
      <Hero primaryButtonText="UserGuide" primaryButtonUrl="/docs">
      </Hero>
      <Footer />
    </AnimationRevealPage>
  );
}
