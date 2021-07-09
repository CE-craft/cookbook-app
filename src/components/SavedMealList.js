import RecipeCard from "./RecipeCard";

const SavedMealList = ({ title, recipesList }) => {
  const recipesArray = Object.values(recipesList);
  return (
    <div className="meal">
      <h2>{title}</h2>
      <div className="meal__tags">
        <div className="tag">Pescatarian</div>
        <div className="tag">Gluten free</div>
        <div className="tag">Dairy free</div>
      </div>
      {recipesArray.map((recipe) => (
        <RecipeCard
          isSaved={recipe.isSaved}
          image={recipe.image}
          title={recipe.title}
        />
      ))}
    </div>
  );
};

export default SavedMealList;
