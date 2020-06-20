import React from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  FurtherTitle,
  Sections,
  Section1,
  Section2,
  Section3,
  FText,
  FImage,
  ImagesContainer,
} from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import lastbg from "../../../assets/homelastbg.svg";

/// /////////////////////////////////////////////////////////////////////////////////Self

export const Furthermore = ({
  titles,
  furthermore,
  imagesSrcUrl,
  ContentContainerGlobal,
  BigContainerGlobal,
}) => {
  return (
    <div id="furthermore">
      <BigContainerGlobal bg={`url(${lastbg}) repeat center`} bgsize="cover">
        <div className="container">
          <ContentContainerGlobal>
            <FurtherTitle>{titles.second}</FurtherTitle>
            <Sections>
              <Section1>
                <FText>{furthermore[0]}</FText>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FImage width="80%" src={`${imagesSrcUrl}/learnbook.jpg`} />
                </div>
              </Section1>
              <Section2>
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FImage width="80%" src={`${imagesSrcUrl}/earth.png`} />
                </div>
                <FText>{furthermore[1]}</FText>
              </Section2>
              <Section3>
                <FText width="90%" align>
                  {furthermore[2]}
                </FText>
                <ImagesContainer>
                  {["alter", "frau", "boy-studies"].map((picName, index) => (
                    <FImage
                      key={index}
                      width="30%"
                      src={`${imagesSrcUrl}/${picName}.jpg`}
                    />
                  ))}
                </ImagesContainer>
              </Section3>
            </Sections>
          </ContentContainerGlobal>
        </div>
      </BigContainerGlobal>
    </div>
  );
};
