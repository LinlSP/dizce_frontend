import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context";

/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container,
  LinksContainer,
  MenuLogoLink,
  ChangeLang,
  Menu,
  PagesMenuBox,
  TitleInMenuBox,
  BackBtnLinks,
  BackBtnLanguages,
  LanguagesBox,
  LangInBox,
  PlaceHolder,
} from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import logo from "../../assets/logo2.png";
import langWorld from "../../assets/languageWorld.svg";
import menu from "../../assets/burgerMenu.svg";
import backbtn from "../../assets/gobtn.svg";
/// /////////////////////////////////////////////////////////////////////////////////Self

const selfName = "header";
const toPages = ["/about", "/services", "/contact", "/legal"];

export const Header = ({ locationPath }) => {
  const {
    languages,
    langToSave,
    setStorageLanguage,
    isLanguage,
    headerAvailable,
    setError,
  } = useContext(Context);
  const [textData, setTextData] = useState("");
  const [menuOn, setMenuOn] = useState(false);
  const [languagesMenu, setLanguagesMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const currentPageIndex = toPages.indexOf(locationPath);
  /// ///////////////Importing Text from JSON - function
  const importTextFromJson = () => {
    import(`../../languages/${isLanguage}/${selfName}.json`)
      .then(({ default: myData }) => {
        setTextData(myData);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };
  /// ////////

  useEffect(() => {
    importTextFromJson();
  }, []);

  const activateLinks = () => {
    setMenuOn(true);
    setActiveMenu("links");
  };
  const activateLanguages = () => {
    setLanguagesMenu(true);
    setActiveMenu("languages");
  };
  const deactivateLinks = () => {
    setMenuOn(false);
    setActiveMenu("");
  };
  const deactivateLanguages = () => {
    setLanguagesMenu(false);
    setActiveMenu("");
  };
  const changeLanguage = (index, callback) => {
    setStorageLanguage(langToSave[index]);
    callback;
  };

  /// ///////////////PAGE

  if (!headerAvailable) return <></>;

  if (textData === "") return <PlaceHolder />;

  const { pagename } = textData;

  return (
    <>
      <Container activated={activeMenu}>
        <div className="container">
          <LanguagesBox on={languagesMenu ? 1 : 0}>
            <BackBtnLanguages
              src={backbtn}
              alt=""
              onClick={() => deactivateLanguages()}
            />
            {languages.map((language, index) => (
              <LangInBox
                thelanguage={langToSave[index]}
                currentlang={isLanguage}
                key={index}
                onClick={() => changeLanguage(index, window.location.reload())}
              >
                {language}
              </LangInBox>
            ))}
          </LanguagesBox>
          <LinksContainer activated={activeMenu}>
            <MenuLogoLink to="/">
              <img height="100%" src={logo} alt="" />
            </MenuLogoLink>
            <div style={{ height: "40%" }}>
              <Menu
                height="100%"
                src={menu}
                alt=""
                onClick={() => activateLinks()}
              />
            </div>
            <div style={{ height: "50%" }}>
              <ChangeLang
                height="100%"
                name="language"
                src={langWorld}
                onClick={() => activateLanguages()}
                alt=""
              />
            </div>
          </LinksContainer>
          <PagesMenuBox on={menuOn ? 1 : 0}>
            <BackBtnLinks
              src={backbtn}
              alt=""
              onClick={() => deactivateLinks()}
            />
            {pagename.map((name, index) => (
              <TitleInMenuBox
                theindex={index}
                page={currentPageIndex}
                to={toPages[index]}
                key={index}
              >
                {name}
              </TitleInMenuBox>
            ))}
          </PagesMenuBox>
        </div>
      </Container>
    </>
  );
};
