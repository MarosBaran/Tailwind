import { Fragment } from "react";
import { createPortal } from "react-dom";
const Backdrop = (props) => {
  return (
    <div
      className=" fixed top-0 left-0 w-full h-screen z-20  bg-black bg-opacity-75"
      onClick={props.onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0  z-30 flex items-center justify-center">
      <div className="bg-white p-4 rounded-2xl shadow-md  animate-slide sm:w-25 w-11/12 h-auto  sm:my-0 my-4">
        {props.children}
      </div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
