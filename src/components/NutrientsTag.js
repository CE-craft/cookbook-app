const NutrientsTag = (props) => {
  return (
    <div className="nutrient-tag">
      <p>{props.nutrientName}</p>
      <h2>{props.nutrientValue}</h2>
    </div>
  );
};

export default NutrientsTag;
