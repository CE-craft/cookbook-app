export const holdRecipe = ({ ...recipe }) => ({
  type: "HOLD_RECIPE",
  recipe,
});
