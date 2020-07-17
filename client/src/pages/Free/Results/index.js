import React, { useEffect, useState } from "react";
import axios from "axios";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container,
  Item,
  ItemLogo,
  ItemPhrase,
  ItemName,
  SubContainer,
  PreviewItem,
  PreviewItemImg,
  PreviewItemText,
  PreviewButton,
} from "./styles";
import { vh } from "../index";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { MiniLoader } from "../../../components/MiniLoader";
import { PreviewModal } from "../../../components/PreviewModal";
import { screenHeight } from "../../../styles/global/Height";
/// /////////////////////////////////////////////////////////////////////////////////Self
export const Results = ({ loading, results }) => {
  const [containerHeight, setContainerHeight] = useState("");

  const [modalOn, setModalOn] = useState(false);
  const [detail, setDetail] = useState({
    loadingDetail: true,
    error: false,
    Ilogo: "",
    Idescription: "",
    Iurl: "",
  });
  const { loadingDetail, error, Ilogo, Idescription, Iurl } = detail;
  const setLoadingTrue = () => {
    setDetail({
      loadingDetail: true,
      error: false,
      Ilogo: "",
      Idescription: "",
      Iurl: "",
    });
  };

  const setNewContainerHeight = () => {
    const elementHeight = document.getElementById("results").clientHeight;
    setContainerHeight(elementHeight + "px");
  };

  const onItemClick = (e) => {
    const name = e.target.getAttribute("name");
    setModalOn(true);
    axios
      .get("/api/free/detail", {
        params: {
          name: name,
        },
      })
      .then(({ data }) => {
        const { response } = data;
        const { logoUrl, url, description } = response;
        return setDetail({
          error: false,
          loadingDetail: false,
          Ilogo: logoUrl,
          Iurl: url,
          Idescription: description,
        });
      })
      .catch(({ response }) => {
        const { error } = response.data;
        console.log(error);
        return setDetail({
          error: true,
          loadingDetail: false,
          Ilogo: "",
          Iurl: "",
          Idescription: "",
        });
      });
  };

  useEffect(() => {
    if (!loading) setNewContainerHeight();
  }, [loading]);

  return (
    <>
      <Container
        loaded={!loading ? 1 : 0}
        newHeight={containerHeight}
        className="container"
      >
        <SubContainer id="results">
          {loading ? (
            <MiniLoader />
          ) : typeof results === "string" ? (
            <div>{results}</div>
          ) : (
            results.map(({ name, phrase, logoUrl }, index) => (
              <Item
                key={index}
                name={name}
                onClick={(e) => {
                  onItemClick(e);
                }}
              >
                <ItemLogo name={name} src={logoUrl} />
                <ItemName name={name}>{name}</ItemName>
                <ItemPhrase name={name}>{phrase}</ItemPhrase>
              </Item>
            ))
          )}
        </SubContainer>
      </Container>
      <PreviewModal
        error={error}
        loading={loadingDetail}
        isOpen={modalOn}
        setModal={setModalOn}
        setLoadingTrue={setLoadingTrue}
        extra={`flex-direction:column;
        background: rgb(18, 255, 255);

        @media only screen and (min-width: 1701px) {
        height: ${80 * screenHeight}px;
        }`}
      >
        <PreviewItem>
          <PreviewItemImg src={Ilogo} />
          <PreviewItemText>{Idescription}</PreviewItemText>
        </PreviewItem>
        <PreviewButton href={Iurl} target="_blank">
          To Website
        </PreviewButton>
      </PreviewModal>
    </>
  );
};
