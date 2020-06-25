import React, { useEffect, useState } from "react";
/// /////////////////////////////////////////////////////////////////////////////////Styles
import {
  Container,
  Item,
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
const randomSrc =
  "https://pixabay.com/get/53e3d7464b5aa814f6da8c7dda79357d133edae44e50744077267ed3914ecc_1280.jpg";
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat nunc blandit purus blandit, id maximus erat vehicula. Vestibulum a risus tempor, imperdiet tortor eu, interdum mauris. Curabitur non risus fermentum, dapibus mauris vehicula, viverra ex. Nunc iaculis nisl non massa rutrum, id egestas metus maximus. Donec non dui a enim finibus imperdiet. Morbi vel consequat neque. Vestibulum congue ullamcorper urna et auctor.

Fusce dignissim suscipit est sed tincidunt. Sed nec magna accumsan, dapibus felis vel, rhoncus tortor. Morbi gravida, nunc a accumsan elementum, mauris leo tincidunt sem, a tristique elit orci vel dolor. Maecenas et nunc quis velit iaculis rutrum. Fusce placerat, nulla vel feugiat tincidunt, ligula tortor dapibus sapien, ac tincidunt est nulla ut dui. Morbi vitae convallis neque. Cras turpis nisl, consequat sit amet dolor ac, sagittis malesuada leo. Fusce blandit id nisi ut molestie. Fusce varius purus eros, vel gravida dolor vulputate ornare. Vestibulum feugiat sollicitudin urna a tempor. Pellentesque aliquet nisi vehicula nulla volutpat, et blandit odio vehicula. Vestibulum ornare orci ut leo imperdiet, id ornare metus finibus. Mauris a orci nisl. Duis tempus malesuada dolor eget bibendum. Donec vestibulum tellus eget vulputate feugiat. Nunc arcu nulla, fringilla eget facilisis nec, consectetur porta ante.

Integer quam velit, ultrices vel tincidunt et, maximus id velit. Sed purus lacus, posuere eu lobortis quis, consequat in magna. Nam purus turpis, hendrerit non dignissim nec, rhoncus et arcu. Nunc commodo convallis nunc, sit amet pulvinar dui. Pellentesque venenatis ultricies massa, et ultrices leo dictum a. In hac habitasse platea dictumst. Praesent arcu nunc, lacinia sit amet est vel, laoreet maximus orci. Curabitur sed est ligula. Nulla iaculis eu libero nec venenatis. Nulla vitae eros ut magna ullamcorper pulvinar. Aenean at lacus sapien. In aliquet ipsum non ante scelerisque, eu elementum sem placerat.

Morbi aliquam libero odio, consequat molestie massa mattis eget. Aliquam consectetur tincidunt massa, et rhoncus tellus euismod et. Proin non condimentum eros. Nulla vehicula ante est, a blandit eros sollicitudin ut. Integer pharetra orci eros, sed rhoncus sapien elementum nec. Nam lobortis ante a tincidunt vestibulum. Vivamus posuere vehicula magna, a porta tortor lobortis et. Integer sit amet suscipit neque, nec mattis velit. Quisque finibus aliquet tortor eu mattis. Pellentesque gravida nunc at urna luctus placerat. Ut vitae ultricies mi. Etiam at massa sed leo congue volutpat.

Cras tortor turpis, elementum at arcu in, dapibus convallis libero. Nam ex neque, eleifend vel sodales non, ultrices et nibh. Phasellus gravida in lacus id placerat. Proin venenatis mauris a suscipit aliquam. Integer ac tincidunt ante. Donec ac ex in felis posuere mollis. Pellentesque vestibulum sagittis tempor. Aliquam sed sagittis nibh. Proin luctus dolor id sem porta volutpat. Curabitur pulvinar nisl odio, in fringilla turpis varius sit amet. Proin eu elit justo. In interdum urna a velit mollis ultrices.`;
export const Results = ({ setLoading, loading }) => {
  const [containerHeight, setContainerHeight] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const setNewContainerHeight = () => {
    const elementHeight = document.getElementById("results").clientHeight;
    setContainerHeight(elementHeight + "px");
  };

  const onItemClick = () => {
    setModalOn(true);
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
            [...Array(5)].map((item, index) => (
              <Item
                onClick={() => {
                  onItemClick();
                }}
                key={index}
              />
            ))
          )}
        </SubContainer>
      </Container>
      <PreviewModal
        error={false}
        loading={true}
        isOpen={modalOn}
        setModal={setModalOn}
        extra={`flex-direction:column;
        background: rgb(18, 255, 255);

        @media only screen and (min-width: 1701px) {
        height: ${80 * screenHeight}px;
        }`}
      >
        <PreviewItem>
          <PreviewItemImg src={randomSrc} />
          <PreviewItemText>{lorem}</PreviewItemText>
        </PreviewItem>
        <PreviewButton href="http://dizce.com" target="_blank">
          To Website
        </PreviewButton>
      </PreviewModal>
    </>
  );
};
