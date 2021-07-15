import DropDownFilter from "./DropDownFilter";
import SearchField from "./SearchFiled";

const FiltersArea = (props) => {
  const tags = [
    "vegetarian",
    "vegan",
    "glutenFree",
    "dairyFree",
    "veryHealthy",
    "veryPopular",
  ];
  return (
    <>
      <div className="filters">
        <div className="filters__separator">
          <h2 className="filters__heading">Filter recipies</h2>
          <div className="filters__container">
            <SearchField getList={props.getList} />
            <DropDownFilter tags={tags} />
          </div>
        </div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default FiltersArea;
