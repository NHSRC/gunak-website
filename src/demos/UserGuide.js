import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import guides from "../guides.js"

import GuideCard from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js"

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <AnimationRevealPage disabled>
      <Header />
      <GuideCard />
      <Footer />
    </AnimationRevealPage>
  );
}
