import { ReactComponent as PlusSign } from "../imgs/plusSign.svg";
import { ReactComponent as MinusSign } from "../imgs/minus.svg";
import { history } from "../helpers/history";
//import { ReactComponent as Close } from "../imgs/close.svg";
//import { useState } from "react";

const RecipeCard = ({
  isSaved = false,
  mealsModal,
  image,
  title = "No title",
}) => {
  const showConfirmModal = () => {
    console.log("confirm");
  };

  const showMealsModal = () => {
    mealsModal(true);
  };

  const titleSize = (title) => {
    const charachters = title.length;
    const removed = charachters - 32;
    if (title.length > 32) {
      const resizedTitle = title.split("").slice(0, -removed).join("") + "...";
      return resizedTitle;
    } else {
      return title;
    }
  };

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
      <div className={"card__info"}>
        <div className="card__heading-wrapper">
          <h3 className="card__heading">{titleSize(title)}</h3>
          <span className={isSaved ? "tag--saved" : "hidden"}>Saved</span>
        </div>

        <div className={"card__info-desc"}>
          <span>60 calories</span>
          <span>4 people</span>
        </div>
      </div>

      {history.location.pathname === "/dashboard" && isSaved ? (
        <div onClick={showConfirmModal} className={"card__btn"}>
          Remove
          <div className="btn-mini">
            <MinusSign />
          </div>
        </div>
      ) : (
        <div onClick={showMealsModal} className={"card__btn"}>
          Add
          <div className="btn-mini">
            <PlusSign />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
