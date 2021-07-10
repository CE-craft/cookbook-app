import SavedMealList from "../components/SavedMealList";
import Container from "../components/Container";
import SubHeader from "../components/SubHeader";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import { removeUserRecipe } from "../actions/mealsActions";
import { useState } from "react";
import { holdRecipe } from "../actions/holdRecipeActions";

const Dashboard = (props) => {
  const meals = Object.keys(props.meals);
  console.log("Dashboard props ", props);

  const isOpen = false;
  const [opned, setOpen] = useState(isOpen);

  const modalState = (open) => {
    setOpen(open);
  };

  const showModalToDelete = (open) => {
    setOpen(open);
  };

  let deleteRecipeConfirmation = false;

  const deleteRecipe = (deleteRecipe) => {
    deleteRecipeConfirmation = deleteRecipe;
    if (deleteRecipeConfirmation) {
      props.removeUserRecipe({ ...props.deletingrecipe });
      setOpen(false);
      deleteRecipeConfirmation = false;
    }
  };

  const heading = "Orgnize your meals";
  const description = "Add recipies to your meal plans and add new meals";
  return (
    <>
      <Modal
        givenClass={!opned ? "hidden" : ""}
        modalState={modalState}
        deleteRecipe={deleteRecipe}
      />
      <SubHeader heading={heading} description={description} />
      <Container>
        <div className="dashboard-layout">
          {meals.map((meal) => (
            <SavedMealList
              showModalToDelete={showModalToDelete}
              key={meal}
              title={meal}
              recipesList={props.meals[meal].recipes}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

const mapPropsToState = (state) => ({
  meals: state.meals,
  deletingrecipe: state.deletingrecipe,
});

const mapDispatchToProps = (dispatch) => ({
  removeUserRecipe: (recipe = {}) => {
    dispatch(removeUserRecipe(recipe));
  },
  holdRecipe: (recipe = {}) => {
    dispatch(holdRecipe(recipe));
  },
});

export default connect(mapPropsToState, mapDispatchToProps)(Dashboard);
