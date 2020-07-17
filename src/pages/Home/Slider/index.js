import React, { useState } from "react";

/// /////////////////////////////////////////////////////////////////////////////////Styles
import { vh } from "../index";
import { Question, Quote, Answer, AnswerImg, SliderButton } from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import quote1 from "../../../assets/initquote.svg";
import quote2 from "../../../assets/endquote.svg";
import sliderbutton from "../../../assets/sliderButton.svg";

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Slider = ({
  questions,
  defaultbgcolor,
  imagesSrcUrl,
  secondarybgcolor,
  ContentContainerGlobal,
  BigContainerGlobal,
}) => {
  const [firstslider, setFirstslider] = useState(true);

  const bggradient = `linear-gradient(90deg, rgba(255,255,255,1) 0%, ${defaultbgcolor} 100%)`;
  const interpreter = `${imagesSrcUrl}/Translator.png`;
  const translators = `${imagesSrcUrl}/Rechteck_1.png`;

  const onSliderChange = (value) => {
    setFirstslider(value);
  };

  return (
    <>
      <div id="slider">
        <BigContainerGlobal id="question" bgcolor={defaultbgcolor}>
          <div className="container">
            <ContentContainerGlobal
              flex
              justify="center"
              align="flex-end"
              extra={`padding: ${4 * vh}px 0 ${4 * vh}px 0;`}
            >
              <Question change={firstslider ? 1 : 0}>
                <Quote src={quote1} extra="margin-right: 1px;" />
                {firstslider ? questions[0].question : questions[1].question}
              </Question>
              <Quote change={firstslider ? 1 : 0} src={quote2} />
            </ContentContainerGlobal>
          </div>
        </BigContainerGlobal>
        <BigContainerGlobal
          id="answer"
          bg={bggradient}
          bgsize="contain"
          extra="transition: height 2s ease-out 1s;"
        >
          <div className="container">
            <ContentContainerGlobal flex justify="center" align="center">
              <Answer change={firstslider ? 1 : 0}>
                {firstslider ? questions[0].answer : questions[1].answer}
                <AnswerImg
                  src={firstslider ? interpreter : translators}
                  alt=""
                />
              </Answer>
            </ContentContainerGlobal>
          </div>
        </BigContainerGlobal>
      </div>
      <div id="sliderbuttons">
        <BigContainerGlobal bgcolor={secondarybgcolor}>
          <div className="container">
            <ContentContainerGlobal flex justify="center" align="center">
              <SliderButton
                src={sliderbutton}
                bgcolor={() => (firstslider ? "black" : "white")}
                onClick={() => onSliderChange(true)}
              />
              <SliderButton
                src={sliderbutton}
                bgcolor={() => (firstslider ? "white" : "black")}
                onClick={() => onSliderChange(false)}
              />
            </ContentContainerGlobal>
          </div>
        </BigContainerGlobal>
      </div>
    </>
  );
};
