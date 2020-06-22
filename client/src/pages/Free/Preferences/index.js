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
  const filterColors = ["white", "green", "red", "blue", "orange"];

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
            {filter}
          </Filter>
        ))}
      </Filters>
    </Container>
  );
};
