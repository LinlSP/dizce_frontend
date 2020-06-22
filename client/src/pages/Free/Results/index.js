import React, { useEffect, useState } from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import { Container, Item, SubContainer } from "./styles";
/// /////////////////////////////////////////////////////////////////////////////////Resources and Components
import { MiniLoader } from "../../../components/MiniLoader";
/// /////////////////////////////////////////////////////////////////////////////////Self
export const Results = ({ setLoading, loading }) => {
  const [containerHeight, setContainerHeight] = useState("");

  const setNewContainerHeight = () => {
    const elementHeight = document.getElementById("results").clientHeight;
    setContainerHeight(elementHeight + "px");
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
          ) : (
            [...Array(5)].map((item, index) => <Item key={index} />)
          )}
        </SubContainer>
      </Container>
      <div className="container">
        <button onClick={() => setLoading(!loading)}>change</button>
      </div>
    </>
  );
};
