import { filterRecipesByTag } from "../actions/filterActions";
import { connect } from "react-redux";

const DropDownFilter = (props) => {
  console.log(props.tags);

  const filterHandler = (e) => {
    console.log(e.target.value);
    props.dispatch(filterRecipesByTag(e.target.value));
  };
  return (
    <select className="dropdown__filter" onChange={filterHandler}>
      <option default key="01" className="dropdown__option" value="empty">
        Select a tag
      </option>
      {props.tags.map((tag) => (
        <option key={tag} className="dropdown__option" value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default connect()(DropDownFilter);
