import RecipeCard from "../components/RecipeCard";
import SubHeader from "../components/SubHeader";
import Container from "../components/Container";
import AddToMealsModal from "../components/AddToMealsModal";
import FiltersArea from "../components/FiltersArea";
import { useState } from "react";
import { connect } from "react-redux";
//import { store } from "../store/store";
const ListPage = (props) => {
  // props.dispatch(loadUserMeals());
  // props.dispatch(getRecipesList(data.recipes))

  let isOpen = false;
  const [opned, setOpen] = useState(isOpen);

  //let currList = props.recipes;
  //const [loadList, setList] = useState(currList);

  const mealsModal = (open) => {
    setOpen(open);
  };

  // const getList = (list) => {
  //   if (list) setList(list);
  // };

  const listing =
    props.filter || props.filterBySearch
      ? props.filteredrecipes
      : props.recipes;

  //console.log(store.getState());

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
          {listing?.map((recipe) => {
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
  filteredrecipes: state.filters.filtered,
  filter: state.filters.tag,
  search: state.filters.search,
});
export default connect(mapStateToProps)(ListPage);
