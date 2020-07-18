import React, { useState, useEffect } from "react";
import axios from "axios";
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
const filterColors = [
  "white",
  "rgba(29,207,41)",
  "rgba(223,47,47)",
  "rgba(40,92,213)",
  "rgba(213,142,36)",
];

// Could have included a search bar, but wouldn't have been be necessary given the number of items
export const Preferences = ({
  loading,
  setResults,
  selectText,
  availableLanguages,
  availableLanguagesForPetition,
  filters,
  filtersForPetition,
}) => {
  const [filterOn, setFilterOn] = useState("");
  const [page, setPage] = useState(parseInt("1"));
  const filterIcons = [all, sciences, mathematic, technology, social];

  const getSites = (filters) => {
    setResults({
      loading: true,
      results: "",
      maxItemIndex: 1,
    });
    const language = document.querySelector("#selectLangForSearch").value;
    axios
      .get("/api/free", {
        params: {
          language: language,
          filters: filters,
          page: page,
        },
      })
      .then(({ data }) => {
        const { response } = data;
        return setResults({
          loading: false,
          results: response,
          maxItemIndex: response.length - 1,
        });
      })
      .catch((error) => {
        return setResults({
          loading: false,
          results: "Something went wrong",
          maxItemIndex: 1,
        });
      });
  };

  const onChangeLanguage = () => {
    setFilterOn(parseInt("0"));
    return getSites("");
  };
  const onClickFilter = (filter, index) => {
    setFilterOn(index);
    return getSites(filter);
  };

  useEffect(() => {
    getSites("");
  }, []);

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
        {filters.map((filter, index) => {
          const name = filtersForPetition[index];
          const color = filterColors[index];
          const src = filterIcons[index];
          return (
            <div key={index} onClick={() => onClickFilter(name, index)}>
              <Filter
                disabled={loading}
                on={filterOn === index ? 1 : 0}
                color={color}
              >
                <FilterImg src={src} />
                {filter}
              </Filter>
            </div>
          );
        })}
      </Filters>
    </Container>
  );
};
