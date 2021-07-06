import RecipeCard from "../components/RecipeCard";
import SubHeader from "../components/SubHeader";
import Container from "../components/Container";
import { connect } from "react-redux";

const ListPage = (props) => {
  console.log("Recipes page", props);
  const title = "Healthy recipies for your daily meals";
  return (
    <>
      <SubHeader heading={title} />
      <Container>
        <div className="list-grid">
          {props.recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
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
