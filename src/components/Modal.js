import { ReactComponent as Close } from "../imgs/close.svg";

const Modal = ({ givenClass, modalState, deleteRecipe }) => {
  const closeModal = () => {
    modalState(false);
  };

  const confirmDeletion = (e) => {
    e.preventDefault();
    deleteRecipe(true);
  };

  return (
    <>
      <div className={givenClass}>
        <div className="modal-bg"></div>
        <div className="modal-window">
          <div className="modal-window__header">
            <h2 className="modal-window__heading">Remove recipe</h2>
            <div onClick={closeModal} className="close">
              <Close />
            </div>
          </div>
          <p>Do you really want to remove this recipe ?</p>
          <button
            onClick={confirmDeletion}
            className="btn-main btn-main--black"
          >
            Delete recipe
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
