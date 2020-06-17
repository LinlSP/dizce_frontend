import React from "react";

/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  BigContainerGlobal,
  ContentContainerGlobal,
} from "../../styles/global/Globalstyles";
import {
  SocialMedia,
  Copyright,
  ResourcesText,
  LinkIcon,
  RLink,
  PlaceHolder,
} from "./styles";

/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { useInjectText } from "../../customHooks/useInjectText";

/// /////////////////////////////////////////////////////////////////////////////////Self

/// setting the height
const windowWidth = window.innerWidth;

var defaultVh = 684;
if (windowWidth > 350 && windowWidth < 1701) {
  defaultVh = 784;
} else if (windowWidth > 1700) {
  defaultVh = window.innerHeight;
}

var vh = defaultVh * 0.01;
///

const date = new Date();
const year = date.getFullYear();

export const Footer = () => {
  const socialLinks = [
    "https://twitter.com/dizce_company",
    "https://www.instagram.com/dizce.company",
    "https://www.facebook.com/pg/dizce.company",
  ];
  const socialSources = [twitter, instagram, facebook];
  const selfName = "footer";
  ///////////////////onMount hooks
  const textData = useInjectText(selfName);

  /// ///////////////PAGE
  if (textData === "") return <PlaceHolder />;

  const { resources } = textData;

  return (
    <BigContainerGlobal bgcolor="black">
      <div className="container">
        <ContentContainerGlobal
          height={`${11 * vh}px`}
          flex
          justify="space-between"
          align="center"
        >
          <SocialMedia>
            {socialSources.map((socialNetwork, index) => (
              <LinkIcon href={socialLinks[index]} key={index}>
                <img src={socialNetwork} alt="" height="100%" />
              </LinkIcon>
            ))}
          </SocialMedia>
          <Copyright>© {year} Copyright Dizce</Copyright>
          <ResourcesText>
            <RLink to="/resources">{resources}</RLink>
          </ResourcesText>
        </ContentContainerGlobal>
      </div>
    </BigContainerGlobal>
  );
};
