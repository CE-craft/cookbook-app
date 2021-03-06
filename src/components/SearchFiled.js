import { getRecipesBySearch } from "../actions/recipesActions";
import { filterBySearch } from "../actions/filterActions";
import { connect } from "react-redux";
import { useState } from "react";

const SearchField = (props) => {
  const [value, setValue] = useState("");

  const chekInput = (e) => {
    setValue(e.target.value);

    props.dispatch(filterBySearch(e.target.value));
  };
  const searchHandler = async (e) => {
    e.preventDefault();

    const searchValue = e.target.elements.search.value;

    await props.dispatch(getRecipesBySearch(searchValue));
    // const list =
    //   props.filter || props.filterBySearch
    //     ? props.filteredrecipes
    //     : props.recipes;
    //console.log(list);
  };
  return (
    <form onSubmit={searchHandler}>
      <label>
        <input
          name="search"
          value={value}
          onChange={chekInput}
          className="input-field input-field--search"
          placeholder="Search"
          type="text"
        />
      </label>
    </form>
  );
};
const mapStateToProps = (state) => ({
  filterBySearch: state.filters.search,
  recipes: state.recipes.recipes,
  filteredrecipes: state.filters.filtered,
  search: state.filters.search,
});

export default connect(mapStateToProps)(SearchField);
