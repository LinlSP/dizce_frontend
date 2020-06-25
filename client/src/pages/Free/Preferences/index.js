import React, { useState } from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container,
  ConfigDiv,
  BackButton,
  SelectLabel,
  LanguageContainer,
  LanguageSelect,
  Language,
  Filters,
  FilterImg,
  Filter,
} from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import backImg from "../../../assets/backIcon.svg";
import all from "../../../assets/all.svg";
import sciences from "../../../assets/chemistry.svg";
import mathematic from "../../../assets/mathematic.svg";
import technology from "../../../assets/computer.svg";
import social from "../../../assets/social.svg";

/// /////////////////////////////////////////////////////////////////////////////////Self
export const Preferences = ({
  loading,
  setLoading,
  selectText,
  availableLanguages,
  availableLanguagesForPetition,
  filters,
}) => {
  const [filterOn, setFilterOn] = useState("");
  const filterColors = [
    "white",
    "rgba(29,207,41)",
    "rgba(223,47,47)",
    "rgba(40,92,213)",
    "rgba(213,142,36)",
  ];
  const filterIcons = [all, sciences, mathematic, technology, social];

  const onChangeLanguage = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const onClickFilter = (index) => {
    setFilterOn(index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Container className="container">
      <ConfigDiv>
        <BackButton to="/services">
          <img height="100%" src={backImg} alt="" />
        </BackButton>
        <LanguageContainer>
          <SelectLabel>{selectText}</SelectLabel>
          <LanguageSelect
            disabled={loading}
            id="selectLangForSearch"
            className="form-control"
            onChange={() => onChangeLanguage()}
          >
            {availableLanguages.map((lang, index) => (
              <Language
                value={availableLanguagesForPetition[index]}
                key={index}
              >
                {lang}
              </Language>
            ))}
          </LanguageSelect>
        </LanguageContainer>
      </ConfigDiv>
      <Filters>
        {filters.map((filter, index) => (
          <Filter
            disabled={loading}
            on={filterOn === index ? 1 : 0}
            color={filterColors[index]}
            key={index}
            onClick={() => onClickFilter(index)}
          >
            <FilterImg src={filterIcons[index]} />
            {filter}
          </Filter>
        ))}
      </Filters>
    </Container>
  );
};
