import Container from "../components/Container";
import NutrientsTag from "../components/NutrientsTag";
import Ingredient from "../components/Ingredient";
import SubHeader from "../components/SubHeader";
import { ReactComponent as Time } from "../imgs/time.svg";
import { ReactComponent as Dollar } from "../imgs/dollar.svg";
import { connect } from "react-redux";
import { getRecipeWidgets } from "../actions/widgetsActions";

const RecipePage = (props) => {
  const id = +props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe.id === id);
  props.dispatch(getRecipeWidgets(id));

  const nutrients = Object.keys(props.widgets[1]);

  return (
    <>
      <SubHeader />
      <Container>
        <img className="recipe__img" src="" alt="" />
        <div className="recipe__details">
          <div className="recipe__info">
            <h2>{recipe.title}</h2>
            <div className="recipe__time-money">
              <div className="recipe__spec">
                <Time /> <p>{recipe.readyInMinutes} minutes</p>
              </div>
              <div className="recipe__spec">
                <Dollar />
                <p>{recipe.pricePerServing} $</p>
              </div>
            </div>
          </div>
          <div className="recipe__preparation">
            <p className="recipe__preparation-text">{recipe.instructions}</p>
            <div className="recipe__nutrients">
              {nutrients.map((nutrient) => (
                <NutrientsTag
                  nutrientName={nutrient}
                  nutrientValue={props.widgets[1][nutrient]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="recipe__ingredients">
          <h2>Ingeredients</h2>
          <div className="line"></div>
          <Ingredient />
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state = {}) => ({
  recipes: state.recipes.recipes,
  widgets: state.recipewidgets,
});

export default connect(mapStateToProps)(RecipePage);
