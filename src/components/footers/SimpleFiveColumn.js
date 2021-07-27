import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

import LogoImage from "../../images/nqas.png";
import {ReactComponent as FacebookIcon} from "../../images/facebook-icon.svg";
import {ReactComponent as GithubIcon} from "../../images/github-icon.svg";
import {ReactComponent as GooglePlayIcon} from "../../images/Google_Play_Arrow_logo.svg";
import {ReactComponent as AppStoreIcon} from "../../images/App_Store_(iOS).svg";
import {ReactComponent as TwitterIcon} from "../../images/twitter-icon.svg";
import {ReactComponent as YoutubeIcon} from "../../images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
    return (
        <Container>
            <FiveColumns>
                <WideColumn>
                    <LogoContainer>
                        <LogoImg src={LogoImage}/>
                        <LogoText>Gunak</LogoText>
                    </LogoContainer>
                    <CompanyDescription>
                        Gunak has been developed by NHSRC for Ministry of Health India
                    </CompanyDescription>
                    <SocialLinksContainer>
                        <SocialLink href="https://github.com/nhsrc" target="_blank">
                            <GithubIcon/>
                        </SocialLink>
                        <SocialLink href="https://play.google.com/store/apps/details?id=com.facilitiesassessment" target="_blank">
                            <GooglePlayIcon/>
                        </SocialLink>
                        <SocialLink href="https://apps.apple.com/in/app/gunak/id1354891968">
                            <AppStoreIcon/>
                        </SocialLink>
                    </SocialLinksContainer>
                </WideColumn>
                <Column>
                    <ColumnHeading>Quick Links</ColumnHeading>
                    <LinkList>
                        <LinkListItem>
                            <Link href="https://www.mohfw.gov.in/" target="_blank">Ministry of Health, India</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="https://nhsrcindia.org/" target="_blank">NHSRC, India</Link>
                        </LinkListItem>
                    </LinkList>
                </Column>
                <Column>
                    <ColumnHeading>Product</ColumnHeading>
                    <LinkList>
                        <LinkListItem>
                            <Link href="https://play.google.com/store/apps/details?id=com.facilitiesassessment" target="_blank">Google Play</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="https://apps.apple.com/in/app/gunak/id1354891968" target="_blank">Apple App Store</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="https://gunak.nhsrcindia.org/dashboard/index.html" target="_blank">State Dashboard</Link>
                        </LinkListItem>
                        <LinkListItem>
                            <Link href="https://github.com/nhsrc" target="_blank">Github</Link>
                        </LinkListItem>
                    </LinkList>
                </Column>
                <Column>
                    {/*<ColumnHeading>Legal</ColumnHeading>*/}
                    {/*<LinkList>*/}
                    {/*    <LinkListItem>*/}
                    {/*        <Link href="#">GDPR</Link>*/}
                    {/*    </LinkListItem>*/}
                    {/*    <LinkListItem>*/}
                    {/*        <Link href="#">Privacy Policy</Link>*/}
                    {/*    </LinkListItem>*/}
                    {/*    <LinkListItem>*/}
                    {/*        <Link href="#">Terms of Service</Link>*/}
                    {/*    </LinkListItem>*/}
                    {/*    <LinkListItem>*/}
                    {/*        <Link href="#">Disclaimer</Link>*/}
                    {/*    </LinkListItem>*/}
                    {/*</LinkList>*/}
                </Column>
            </FiveColumns>
        </Container>
    );
};
