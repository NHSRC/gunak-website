import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import {css} from "styled-components/macro";
import {SectionHeading} from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import {ReactComponent as SvgDecoratorBlob3} from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-10 flex-shrink-0 relative`}
    img {
      ${tw`w-40 h-40`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({cards}) => {
    return (
        <Container>
            <ThreeColumnContainer>
                <Heading>Programs supported by <span tw="text-primary-500">Gunak</span></Heading>
                {cards.map((card, i) => (
                    <Column key={i}>
                        <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt=""/>
              </span>
                <span className="textContainer">
                    <a href={card.link} target="_blank"><span className="title">{card.title}</span></a>
                <p className="description">
                  {card.description}
                </p>
              </span>
                        </Card>
                    </Column>
                ))}
            </ThreeColumnContainer>
            <DecoratorBlob/>
        </Container>
    );
};
