import Container from "../components/Container";
import NutrientsTag from "../components/NutrientsTag";
import Ingredient from "../components/Ingredient";
import SubHeader from "../components/SubHeader";
import { ReactComponent as Time } from "../imgs/time.svg";
import { ReactComponent as Dollar } from "../imgs/dollar.svg";
import { connect } from "react-redux";
//import { store } from "../store/store";

const RecipePage = (props) => {
  // console.log(store.getState());
  // console.log(props.widgets);

  const id = +props.match.params.id;
  const recipe = props.recipes.find((recipe) => recipe.id === id);
  //console.log(recipe);
  // const nutrients = Object.keys(props.widgets[1].bad);
  // console.log(nutrients);

  return (
    <>
      <SubHeader
        heading={"Recipie details"}
        description={"cooking Instructions, nutrients and ingredients"}
      />
      <Container>
        <div className="recipe__img">
          <img src={recipe.image} alt={recipe.title} />
        </div>
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
              {props.widgets[1].bad.map((nutrient) => (
                <NutrientsTag
                  nutrientName={nutrient.title}
                  nutrientValue={nutrient.amount}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="recipe__ingredients">
          <h2>Ingeredients</h2>

          {props.widgets[0].ingredients.map((ingredient) => (
            <Ingredient
              key={ingredient.name}
              name={ingredient.name}
              image={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              amount={ingredient.amount.metric.value}
              unit={ingredient.amount.metric.unit}
            />
          ))}
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
