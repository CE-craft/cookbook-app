import Container from "../components/Container";
import NutrientsTag from "../components/NutrientsTag";
import Ingredient from "../components/Ingredient";
import SubHeader from "../components/SubHeader";
const RecipePage = (props) => {
  //const id = props.match.params.id;
  return (
    <>
      <SubHeader />
      <Container>
        <img className="recipe__img" src="" alt="" />
        <div className="recipe__details">
          <div className="recipe__info">
            <h2>Copycat Chick Fil A Chicken Sandwich</h2>
            <div className="recipe__time-money">
              <div className="recipe__spec">50 minutes</div>
              <div className="recipe__spec">$1.79 per serving</div>
            </div>
          </div>
          <div className="recipe__preparation">
            <p>
              shjdbcjlds bljsdbc lsdb lsbclskjd clksjd lsdkjnbclskjdn jksn
              mkdjcnsmcn
            </p>
            <div className="recipe__nutrients">
              <NutrientsTag />
            </div>
          </div>
        </div>
        <div className="recipe__ingredients">
          <h2>Ingeredients</h2>
          <div className="line"></div>
          <Ingredient />
        </div>
      </Container>
    </>
  );
};

export default RecipePage;
