import React from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container,
  PlaceHolder,
  QuestionWrapper,
  BrandName,
  AnswerWrapper,
  Answer,
  BigIcon,
} from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import dash from "../../assets/languageIcon.svg";
import bigIcon from "../../assets/aboutIcons.svg";
import { useInjectText } from "../../customHooks/useInjectText";
import { useEnableHeader } from "../../customHooks/useEnableHeader";
import { vh } from "../../styles/global/Height";

/// /////////////////////////////////////////////////////////////////////////////////Self

export const About = () => {
  const selfName = "about";
  /// ////////////////onMount hooks
  const textData = useInjectText(selfName);
  useEnableHeader();

  /// ///////////////PAGE

  if (textData === "") return <PlaceHolder />;

  const { question, answer } = textData;

  return (
    <>
      <div style={{ background: "rgba(198,235,239,1)" }}>
        <div className="container">
          <Container>
            <QuestionWrapper>
              {question}
              <BrandName>Dizce?</BrandName>
            </QuestionWrapper>
            <AnswerWrapper>
              <Answer>
                <img height={`${3 * vh}px`} src={dash} alt="" />
                {answer[0]}
              </Answer>
              <BigIcon alt="" src={bigIcon} />
              <Answer>
                <img height={`${3 * vh}px`} src={dash} alt="" />
                {answer[0]}
              </Answer>
            </AnswerWrapper>
          </Container>
        </div>
      </div>
    </>
  );
};
