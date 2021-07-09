import SavedMealList from "../components/SavedMealList";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const meals = props.meals.keys;
  return (
    <>
      {meals.map((meal) => (
        <SavedMealList title={meal} recipesList={props.meals.meal} />
      ))}
    </>
  );
};

const mapPropsToState = (state) => ({
  meals: state.meals,
});

export default connect(mapPropsToState)(Dashboard);
