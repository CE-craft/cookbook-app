import { ReactComponent as PlusSign } from "../imgs/plusSign.svg";
import { ReactComponent as Close } from "../imgs/close.svg";

const AddToMealsModal = ({ givenClass, mealsModal }) => {
  const closeMealsModal = () => mealsModal(false);
  return (
    <>
      <div className={givenClass}>
        <div className="modal-bg"></div>
        <div className="modal-window">
          <div className="modal-window__header">
            <h2 className="modal-window__heading">Select meal</h2>
            <div onClick={closeMealsModal} className="close">
              <Close />
            </div>
          </div>
          <p>Select the meal where you want to add the recipe</p>
          <div className="modal-widow__list">
            <div className="modal-widow__list-item">
              <h3 className="modal-widow__list-item__heading">Breakfast</h3>
              <div className="btn-large">
                <PlusSign />
              </div>
            </div>
            <div className="modal-widow__list-item">
              <h3 className="modal-widow__list-item__heading">Launch</h3>
              <div className="btn-large">
                <PlusSign />
              </div>
            </div>
            <div className="modal-widow__list-item">
              <h3 className="modal-widow__list-item__heading">Dinner</h3>
              <div className="btn-large">
                <PlusSign />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToMealsModal;
