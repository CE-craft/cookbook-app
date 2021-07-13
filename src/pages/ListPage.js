import RecipeCard from "../components/RecipeCard";
import SubHeader from "../components/SubHeader";
import Container from "../components/Container";
import AddToMealsModal from "../components/AddToMealsModal";
import FiltersArea from "../components/FiltersArea";
import { useState } from "react";
import { connect } from "react-redux";

const ListPage = (props) => {
  // props.dispatch(loadUserMeals());
  // props.dispatch(getRecipesList(data.recipes))

  let isOpen = false;
  const [opned, setOpen] = useState(isOpen);

  const mealsModal = (open) => {
    setOpen(open);
  };

  const title = "Healthy recipies for your daily meals";
  return (
    <>
      <AddToMealsModal
        givenClass={!opned ? "hidden" : ""}
        mealsModal={mealsModal}
      />
      <SubHeader heading={title} />
      <Container>
        <FiltersArea />
        <div className="list-grid">
          {props.recipes.map((recipe) => {
            return (
              <RecipeCard
                id={recipe.id}
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                mealsModal={mealsModal}
              />
            );
          })}
        </div>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
  page: state.recipes.page,
});
export default connect(mapStateToProps)(ListPage);
