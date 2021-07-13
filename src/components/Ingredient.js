import { caps } from "../helpers/firstLetterCaps";

const Ingredient = ({ name, image, amount, unit }) => {
  const ingredientName = caps(name);
  return (
    <div className="ingredient">
      <div className="ingredient__img">
        <img src={image} alt={ingredientName} />
      </div>
      <p className="ingredient__name">{ingredientName}</p>
      <div className="ingredient__quantity">
        <p>
          {amount} {unit}
        </p>
      </div>
    </div>
  );
};
export default Ingredient;
