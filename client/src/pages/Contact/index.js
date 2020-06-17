import React, { useState } from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  PlaceHolder,
  Container,
  MailButton,
  SocialMedia,
  LinkIcon,
  TheOr,
  TheText,
} from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { useInjectText } from "../../customHooks/useInjectText";
import { useEnableHeader } from "../../customHooks/useEnableHeader";
/// /////////////////////////////////////////////////////////////////////////////////Self
export const Contact = () => {
  const [revealed, setRevealed] = useState({
    mail0: false,
    mail1: false,
  });
  const { mail0, mail1 } = revealed;
  const mails = ["dizce.inquiries@gmail.com", "dizce.supp@gmail.com"];
  const socialLinks = [
    "https://twitter.com/dizce_company",
    "https://www.instagram.com/dizce.company",
    "https://www.facebook.com/pg/dizce.company",
  ];
  const socialSources = [twitter, instagram, facebook];

  const selfName = "contact";
  ///////////////////onMount hooks
  const textData = useInjectText(selfName);
  useEnableHeader();
  //////////////////

  const revealMail = (number) => {
    if (number === 0)
      setRevealed({
        ...revealed,
        mail0: true,
      });
    if (number === 1)
      setRevealed({
        ...revealed,
        mail1: true,
      });
  };

  /// ///////////////PAGE
  if (textData === "") return <PlaceHolder />;

  const { inquiries, support, or, socialmedia } = textData;

  return (
    <>
      <Container className="container">
        <MailButton on={mail0 ? 1 : 0} onClick={() => revealMail(0)}>
          {mail0 ? mails[0] : inquiries}
        </MailButton>
        <MailButton on={mail0 ? 1 : 0} onClick={() => revealMail(1)}>
          {mail1 ? mails[1] : support}
        </MailButton>
        <TheOr>{or}</TheOr>
        <TheText>{socialmedia}</TheText>
        <SocialMedia>
          {socialSources.map((socialNetwork, index) => (
            <LinkIcon href={socialLinks[index]} key={index}>
              <img src={socialNetwork} alt="" height="100%" />
            </LinkIcon>
          ))}
        </SocialMedia>
      </Container>
    </>
  );
};
