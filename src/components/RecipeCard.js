const RecipeCard = ({ image, title }) => {
  return (
    <div className="card">
      <img
        src={
          image
            ? image
            : `https://www.urbansplash.co.uk/images/placeholder-1-1.jpg`
        }
        alt={title}
      />
      <div className="card__info">
        <div className="card__heading-wrapper">
          <h3 className="card__heading">{title}</h3>
          <span className="tag--saved">Saved</span>
        </div>

        <div className="card__info-desc">
          <span>60 calories</span>
          <span>4 people</span>
        </div>
      </div>
      <div className="card__btn">
        Add<div className="btn-plus">+</div>
      </div>
    </div>
  );
};

export default RecipeCard;
