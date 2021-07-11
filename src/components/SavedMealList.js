import RecipeCard from "./RecipeCard";
import { randomId } from "../helpers/randomID";
import { caps } from "../helpers/firstLetterCaps";

const SavedMealList = ({
  title,
  recipesList,
  showModalToDelete,
  removeRecipeFromMeal,
}) => {
  let recipesArray = [];

  if (recipesList.recipes !== "recipe")
    recipesArray = Object.values(recipesList);

  return (
    <div className="meal">
      <h2 className="meal__heading">{caps(title)}</h2>
      <div className="meal__tags">
        <div className="tag">Pescatarian</div>
        <div className="tag">Gluten free</div>
        <div className="tag">Dairy free</div>
      </div>
      <div className="line"></div>
      <div className="meal__recipes">
        {recipesList === "recipe" ? (
          <p className="meal__empty" key={randomId()}>
            No recipes added
          </p>
        ) : (
          recipesArray.map((recipe) => (
            <RecipeCard
              showModalToDelete={showModalToDelete}
              key={recipe.id}
              isSaved={recipe.isSaved}
              image={recipe.image}
              title={recipe.title}
              meal={title}
              recipeId={recipe.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedMealList;
