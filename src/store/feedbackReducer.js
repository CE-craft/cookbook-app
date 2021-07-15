export const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEND_FEEDBACK":
      return { added: action.added };
    case "CLEAR_FEEDBACK":
      return { added: action.added };
    case "SEND_FEEDBACK_ERROR":
      return { added: action.added };
    default:
      return state;
  }
};
