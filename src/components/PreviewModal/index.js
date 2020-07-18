import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { TotalContainer, ModalContainer, Modal, CloseX, Arrow } from "./styles";
import { LoaderInModal } from "./LoaderInModal";
import { Error } from "./Error";

import arrow from "../../assets/backIcon.svg";

export const PreviewModal = ({
  error = false,
  loading = true,
  isOpen,
  setModal,
  children,
  height,
  extra,
  setLoadingTrue,
  itemIndex,
  maxItemIndex,
  setItemIndex,
  setNewDetail,
} = {}) => {
  const closeModal = () => {
    setModal(false);
    setLoadingTrue();
  };

  if (!isOpen) {
    return null;
  }

  const returnContent = () => {
    if (error) return <Error />;
    if (loading) return <LoaderInModal />;
    return children;
  };

  useEffect(() => {
    window.onclick = (e) => {
      var targetClass = e.target.classList;
      if (targetClass.contains("outOfModal")) {
        return closeModal();
      }
    };
    setNewDetail();
    return () => {
      window.onclick = undefined;
    };
  }, [itemIndex]);

  return ReactDOM.createPortal(
    <TotalContainer className="outOfModal">
      <CloseX className="outOfModal">X</CloseX>
      <ModalContainer className="container outOfModal">
        <Arrow
          left
          index={itemIndex}
          src={arrow}
          onClick={() => setItemIndex(itemIndex - 1)}
        />
        <Modal height={height} extra={extra}>
          {returnContent()}
        </Modal>
        <Arrow
          right
          index={itemIndex}
          maxIndex={maxItemIndex}
          src={arrow}
          onClick={() => setItemIndex(itemIndex + 1)}
        />
      </ModalContainer>
    </TotalContainer>,
    document.getElementById("PreviewModal")
  );
};
