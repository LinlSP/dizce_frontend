import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../Context";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { BigContainerGlobal } from "../../styles/global/Globalstyles";
import { Container, PlaceHolder, OptionBox, Title, SubTitle } from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import bg from "../../assets/servicesBg.svg";
const freeBg =
  "https://res.cloudinary.com/d1zc3/image/upload/v1591983275/All/Services/Free/blurredbooks.jpg";
const storeBg =
  "https://res.cloudinary.com/d1zc3/image/upload/v1591983327/All/Services/Premium/book.jpg";
const personalizedBg =
  "https://res.cloudinary.com/d1zc3/image/upload/v1591983312/All/Services/Personalized/business.jpg";
/// /////////////////////////////////////////////////////////////////////////////////Self

const selfName = "services";

export const Services = () => {
  const { isLanguage, setHeaderAvailable, setError } = useContext(Context);
  const [textData, setTextData] = useState("");
  const bgImages = [freeBg, storeBg, personalizedBg];
  const routes = ["/free", "", "/personalized"];
  const boxStyles = [
    {
      text: "white",
      bg: "rgba(0,0,0,.7)",
    },
    {
      text: "black",
      bg: "rgba(255,255,255,.7)",
    },
    {
      text: "white",
      bg: "rgba(0,0,0,.7)",
    },
  ];

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
    setHeaderAvailable(true);
  }, []);

  /// ///////////////PAGE

  if (textData === "") return <PlaceHolder bg={bg} />;

  const { services } = textData;

  return (
    <>
      <BigContainerGlobal bg={`url(${bg}) no-repeat center`} bgsize="cover">
        <div className="container">
          <Container>
            {services.map((boxText, index) => (
              <OptionBox
                bg={bgImages[index]}
                available={index === 1 ? 0 : 1}
                key={index}
                to={"/services" + routes[index]}
              >
                <Title
                  color={boxStyles[index].text}
                  bgcolor={boxStyles[index].bg}
                >
                  {boxText.type}
                </Title>
                <SubTitle
                  color={boxStyles[index].text}
                  bgcolor={boxStyles[index].bg}
                >
                  {boxText.sub}
                </SubTitle>
              </OptionBox>
            ))}
          </Container>
        </div>
      </BigContainerGlobal>
    </>
  );
};
