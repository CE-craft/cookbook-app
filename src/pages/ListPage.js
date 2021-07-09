import RecipeCard from "../components/RecipeCard";
import SubHeader from "../components/SubHeader";
import Container from "../components/Container";
import AddToMealsModal from "../components/AddToMealsModal";
import { useState } from "react";
import { connect } from "react-redux";

const ListPage = (props) => {
  let isSaved = false;

  let isOpen = false;
  const [opned, setOpen] = useState(isOpen);
  const mealsModal = (open) => {
    setOpen(open);
  };

  console.log("Recipes page", props);
  const title = "Healthy recipies for your daily meals";
  return (
    <>
      <AddToMealsModal
        givenClass={!opned ? "hidden" : ""}
        mealsModal={mealsModal}
      />
      <SubHeader heading={title} />
      <Container>
        <div className="list-grid">
          {props.recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                mealsModal={mealsModal}
                isSaved={isSaved}
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
