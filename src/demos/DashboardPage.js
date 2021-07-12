import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js"
import Programs from "components/features/DashedBorderSixFeatures.js"
import Footer from "components/footers/SimpleFiveColumn.js";
import GetStarted from "components/cta/GetStarted.js";

export default () => {
  //const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  //const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
    <Header />
      <Programs />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
}
