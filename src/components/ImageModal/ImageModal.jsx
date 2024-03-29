import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, info }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div>
        <img src={info} alt="" />
      </div>
    </Modal>
  );
};

export default ImageModal;
