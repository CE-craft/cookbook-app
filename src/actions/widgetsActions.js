import { fetchingWidgets } from "../API/fetching";

export const getWidgets = ([...widgets]) => ({
  type: "GET_WIDGETS",
  widgets,
});

export const getRecipeWidgets = (id) => {
  return async (dispatch) => {
    const widgets = await fetchingWidgets(id);

    dispatch(getWidgets(widgets));
  };
};
