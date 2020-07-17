import React, { useContext, useState } from "react";
import { Context } from "../../../Context";

/// /////////////////////////////////////////////////////////////////////////////////Styles

import {
  LogoSection,
  MainTitle,
  LittleMainTitle,
  WorldIcon,
  WorldIconImage,
  MainButton,
  BurgerMenu,
  FirstLine,
  UpperMenu,
  UpperLink,
  SideMenu,
  SideMenuLink,
  SideMenuButton,
  SelectLangBox,
  LangInBox,
} from "./styles";

/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import homebg from "../../../assets/homebg.svg";
import logo2 from "../../../assets/logo2.png";
import burgerMenu from "../../../assets/burgerMenu.svg";
import languageWorld from "../../../assets/languageWorld.svg";
import Backbtn from "../../../assets/gobtn.svg";
import { vh } from "../index";
/// /////////////////////////////////////////////////////////////////////////////////Self

export const MainScreen = ({
  big1,
  big2,
  mini,
  button,
  sidepanel,
  defaultbgcolor,
  ContentContainerGlobal,
  BigContainerGlobal,
}) => {
  const { languages, setStorageLanguage, langToSave } = useContext(Context);

  const [sideMenu, setSideMenu] = useState(false);
  const [langBox, setLangBox] = useState(false);

  const menuLinksTo = ["/about", "/services", "/contact", "/legal"];

  const changeLanguage = (index) => {
    setStorageLanguage(langToSave[index]);
    window.location.reload();
  };

  return (
    <>
      <SideMenu on={sideMenu ? 1 : 0}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            padding: "5vh 0",
          }}
        >
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "flex-start",
              height: `${6 * vh}px`,
              position: "absolute",
            }}
          >
            <SideMenuButton
              src={Backbtn}
              height="100%"
              alt=""
              onClick={() => setSideMenu(false)}
            />
          </div>
          {sidepanel.map((linkTitle, index) => (
            <SideMenuLink key={index} to={menuLinksTo[index]}>
              {linkTitle}
            </SideMenuLink>
          ))}
        </div>
      </SideMenu>
      <div id="mainscreen">
        <BigContainerGlobal
          bg={`url(${homebg}) repeat center`}
          bgcolor={defaultbgcolor}
          bgsize="cover"
        >
          <div className="container">
            <ContentContainerGlobal
              bgcolor="transparent"
              flex
              flexCol
              justify="space-between"
              align="center"
            >
              <LogoSection>
                <img src={logo2} alt="" height="80%" />
                <BurgerMenu
                  src={burgerMenu}
                  alt=""
                  height="40%"
                  onClick={() => setSideMenu(true)}
                />
                <UpperMenu>
                  {sidepanel.map((linkTitle, index) => (
                    <UpperLink key={index} to={menuLinksTo[index]}>
                      {linkTitle}
                    </UpperLink>
                  ))}
                </UpperMenu>
              </LogoSection>
              <MainTitle>
                <FirstLine>
                  {big1}
                  <LittleMainTitle>{mini}</LittleMainTitle>
                </FirstLine>
                {big2}
              </MainTitle>
              <MainButton to="/services">{button}</MainButton>
              <WorldIcon>
                <SelectLangBox on={langBox ? 1 : 0}>
                  {languages.map((language, index) => (
                    <LangInBox
                      key={index}
                      onClick={() => {
                        changeLanguage(index);
                      }}
                    >
                      {language}
                    </LangInBox>
                  ))}
                </SelectLangBox>
                <WorldIconImage
                  name="language"
                  onClick={() => {
                    setLangBox(!langBox);
                  }}
                  src={languageWorld}
                  height="100%"
                  alt=""
                />
              </WorldIcon>
            </ContentContainerGlobal>
          </div>
        </BigContainerGlobal>
      </div>
    </>
  );
};
