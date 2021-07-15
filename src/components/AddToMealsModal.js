import { ReactComponent as PlusSign } from "../imgs/plusSign.svg";
import { ReactComponent as Close } from "../imgs/close.svg";
import { caps } from "../helpers/firstLetterCaps";
import { saveRecipeFirebase } from "../actions/holdRecipeActions";
import { connect } from "react-redux";
import { sendFeedback, clearFeedback } from "../actions/feedbackActions";
//import { store } from "../store/store";

const AddToMealsModal = ({ givenClass, mealsModal, ...props }) => {
  const meals = Object.keys(props.meals);

  // const saveRecipeToMeal = (e) => {
  //   const meal = e.target.dataset.meal;
  //   console.log(meal);
  //   const recipe = props.holdrecipe;
  //   const uid = props.uid;

  //   props.dispatch(saveRecipeFirebase(recipe, uid, meal));
  //   console.log(store.getState());
  // };

  const closeMealsModal = () => {
    mealsModal(false);
    // if closed remove that saved recipe we get from list
  };
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
            {meals.map((meal) => (
              <div key={meal} className="modal-widow__list-item">
                <h3 className="modal-widow__list-item__heading">
                  {caps(meal)}
                </h3>

                <div
                  onClick={(e) => {
                    /*const meal = e.target.dataset.meal;*/
                    //console.log(meal);
                    const recipe = props.holdrecipe;
                    const uid = props.uid;

                    props.dispatch(saveRecipeFirebase(recipe, uid, meal));

                    props.dispatch(sendFeedback(meal));
                    setTimeout(() => {
                      props.dispatch(clearFeedback());
                    }, 5000);
                  }}
                  data-meal={meal}
                  className="btn-large"
                >
                  <PlusSign />
                </div>
              </div>
            ))}

            {/* <div className="modal-widow__list-item">
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
            </div> */}
            <div className={props.feedback ? "added-recipe" : "hidden"}>
              <p>{props.feedback ? props.feedback : ""}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  holdrecipe: state.holdrecipe,
  uid: state.auth.uid,
  feedback: state.feedback.added,
  errors: state.error,
});

export default connect(mapStateToProps)(AddToMealsModal);
