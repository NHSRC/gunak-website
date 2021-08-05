import React from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

// import logo from "../../images/logo.svg";
import logo from "../../images/nqas.png";
import {ReactComponent as MenuIcon} from "feather-icons/dist/icons/menu.svg";
import {ReactComponent as CloseIcon} from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const CurrentNavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent border-primary-500 hocus:text-primary-500
`;


export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-20 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const linkDetails = [{name: "User Guide", link: "docs"}, {name: "Mobile", link: "mobile"}, {name: "Dashboard", link: "dashboard"}];

export default ({roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg"}) => {
    let path = window.location.pathname;
    let defaultLinks = [];
    if (path !== "/") {
        defaultLinks = [
            <NavLinks key={1}>
                {path === "/docs" ? <CurrentNavLink href="./docs">User Guide2</CurrentNavLink> : <NavLink href="#/docs">User Guide</NavLink>}
                {path === "/mobile" ? <CurrentNavLink href="../mobile">Mobile App</CurrentNavLink> : <NavLink href="../mobile">Mobile App</NavLink>}
                {path === "/dashboard" ? <CurrentNavLink href="../dashboard">Dashboard</CurrentNavLink> : <NavLink href="../dashboard">Dashboard</NavLink>}
                <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="../mobile">Get Started</PrimaryLink>
            </NavLinks>
        ];
    } else {
        defaultLinks = [
            <NavLinks key={1}>
                <NavLink href="docs">User Guide1</NavLink>
                <NavLink href="../mobile">Mobile App</NavLink>
                <NavLink href="../dashboard">Dashboard</NavLink>
                <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="../mobile">Get Started</PrimaryLink>
            </NavLinks>
        ];
    }

    console.log("defaultlinks", defaultLinks);

    const {showNavLinks, animation, toggleNavbar} = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const defaultLogoLink = (
        <LogoLink href="/">
            <img src={logo} alt="logo"/>
        </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
        <Header className={className || "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <MobileNavLinks initial={{x: "150%", display: "none"}} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
                    {links}
                </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <CloseIcon tw="w-6 h-6"/> : <MenuIcon tw="w-6 h-6"/>}
                </NavToggle>
            </MobileNavLinksContainer>
        </Header>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    }
};
