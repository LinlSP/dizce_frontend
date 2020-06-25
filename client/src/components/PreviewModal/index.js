import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { TotalContainer, ModalContainer, Modal, CloseX } from "./styles";
import { LoaderInModal } from "./LoaderInModal";
import { Error } from "./Error";

export const PreviewModal = ({
  error = false,
  loading = true,
  isOpen,
  setModal,
  children,
  height,
  extra,
} = {}) => {
  const closeModal = () => {
    setModal(false);
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
    return () => {
      window.onclick = undefined;
    };
  }, []);

  return ReactDOM.createPortal(
    <TotalContainer className="outOfModal">
      <CloseX className="outOfModal">X</CloseX>
      <ModalContainer className="container outOfModal">
        <Modal height={height} extra={extra}>
          {returnContent()}
        </Modal>
      </ModalContainer>
    </TotalContainer>,
    document.getElementById("PreviewModal")
  );
};
