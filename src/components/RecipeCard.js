import { ReactComponent as PlusSign } from "../imgs/plusSign.svg";
import { ReactComponent as MinusSign } from "../imgs/minus.svg";
import { Link } from "react-router-dom";
import { history } from "../helpers/history";
import { connect } from "react-redux";
//import { removeUserRecipe } from "../actions/mealsActions";
import { holdRecipeStore } from "../actions/holdRecipeActions";
import { holdRecipe } from "../actions/holdRecipeActions";

//import { ReactComponent as Close } from "../imgs/close.svg";
import { store } from "../store/store";

const RecipeCard = ({
  id,
  recipeId,
  isSaved = false,
  mealsModal,
  image,
  title = "No title",
  meal,
  showModalToDelete,
  removeRecipeFromMeal,
  ...props
}) => {
  const showConfirmModal = () => {
    showModalToDelete(true);
    const recipe = { id: recipeId.toString(), meal: meal };
    props.dispatch(holdRecipe(recipe));
    console.log(store.getState());
  };

  const showMealsModal = () => {
    mealsModal(true);

    // need to save the ID fetch that specific recipie by ID
    // Store the recipie to redux
    props.dispatch(holdRecipeStore(id));
  };

  const titleSize = (title) => {
    const charachters = title.length;
    const removed = charachters - 32;
    if (title.length > 32) {
      const resizedTitle = title.split("").slice(0, -removed).join("") + "...";
      return resizedTitle;
    } else {
      return title;
    }
  };

  return (
    <div className="card">
      <img
        src={
          image
            ? image
            : `https://www.urbansplash.co.uk/images/placeholder-1-1.jpg`
        }
        alt={title}
      />
      <div className={"card__info"}>
        <div className="card__heading-wrapper">
          <h3 className="card__heading">
            <Link to={`/recipe/${recipeId}`}> {titleSize(title)}</Link>
          </h3>
          <span className={isSaved ? "tag--saved" : "hidden"}>Saved</span>
        </div>

        <div className={"card__info-desc"}>
          <span>60 calories</span>
          <span>4 people</span>
        </div>
      </div>

      {history.location.pathname === "/dashboard" && isSaved ? (
        <div onClick={showConfirmModal} className={"card__btn"}>
          Remove
          <div className="btn-mini">
            <MinusSign />
          </div>
        </div>
      ) : (
        <div onClick={showMealsModal} className={"card__btn"}>
          Add
          <div className="btn-mini">
            <PlusSign />
          </div>
        </div>
      )}
    </div>
  );
};

export default connect()(RecipeCard);
