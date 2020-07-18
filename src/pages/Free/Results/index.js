import React, { useEffect, useReducer, useState } from "react";
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
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { MiniLoader } from "../../../components/MiniLoader";
import { PreviewModal } from "../../../components/PreviewModal";
import { screenHeight } from "../../../styles/global/Height";
/// /////////////////////////////////////////////////////////////////////////////////Self

const detailReducer = (state, action) => {
  const { type, parameters } = action;
  switch (type) {
    case "setLoadingTrue":
      return {
        ...state,
        loading: true,
        error: false,
        Ilogo: "",
        Idescription: "",
        Iurl: "",
      };
    case "setItemIndex":
      return {
        ...state,
        itemIndex: parameters.index,
      };
    case "detailSuccess":
      return {
        ...state,
        error: false,
        loading: false,
        Ilogo: parameters.logoUrl,
        Iurl: parameters.url,
        Idescription: parameters.description,
      };
    case "detailError":
      return {
        ...state,
        error: true,
        loading: false,
        Ilogo: "",
        Iurl: "",
        Idescription: "",
      };

    default:
      return state;
  }
};

export const Results = ({ loading, results, maxItemIndex }) => {
  const [containerHeight, setContainerHeight] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const [detail, detailDispatch] = useReducer(detailReducer, {
    loading: true,
    error: false,
    Ilogo: "",
    Idescription: "",
    Iurl: "",
    itemIndex: parseInt("0"),
  });

  const { Ilogo, Idescription, Iurl } = detail;

  const setNewContainerHeight = () => {
    const elementHeight = document.getElementById("results").clientHeight;
    setContainerHeight(elementHeight + "px");
  };

  const getDetailCall = (name) => {
    detailDispatch({ type: "setLoadingTrue" });
    axios
      .get("/api/free/detail", {
        params: {
          name: name,
        },
      })
      .then(({ data }) => {
        const { response } = data;
        const { logoUrl, url, description } = response;
        return detailDispatch({
          type: "detailSuccess",
          parameters: {
            logoUrl: logoUrl,
            url: url,
            description: description,
          },
        });
      })
      .catch(({ response }) => {
        const { error } = response.data;
        return detailDispatch({ type: "detailError" });
      });
  };

  const onItemClick = (name, index) => {
    setModalOn(true);
    detailDispatch({
      type: "setItemIndex",
      parameters: { index: index },
    });
    return getDetailCall(name);
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
                onClick={() => {
                  onItemClick(name, index);
                }}
              >
                <ItemLogo src={logoUrl} />
                <ItemName>{name}</ItemName>
                <ItemPhrase>{phrase}</ItemPhrase>
              </Item>
            ))
          )}
        </SubContainer>
      </Container>
      <PreviewModal
        error={detail.error}
        loading={detail.loading}
        itemIndex={detail.itemIndex}
        maxItemIndex={maxItemIndex}
        isOpen={modalOn}
        setModal={setModalOn}
        setLoadingTrue={() => detailDispatch({ type: "setLoadingTrue" })}
        setNewDetail={() => {
          const name = results[detail.itemIndex].name;
          if (name) {
            return getDetailCall(name);
          }
          return;
        }}
        setItemIndex={(newIndex) =>
          detailDispatch({
            type: "setItemIndex",
            parameters: {
              index: newIndex,
            },
          })
        }
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
