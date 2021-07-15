export const sendFeedback = (meal = "") => ({
  type: "SEND_FEEDBACK",
  added: `Added to ${meal}`,
});

export const sendFeedbackError = (error = "") => ({
  type: "SEND_FEEDBACK_ERROR",
  added: error,
});

export const clearFeedback = () => ({
  type: "CLEAR_FEEDBACK",
});
