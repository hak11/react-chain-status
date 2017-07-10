
export const errorMessage = () => {
  return (dispatch) => {
    dispatch({
      type: 'ERROR_MESSAGE'
    });
  };
};

export const closeDialog = () => {
  return (dispatch) => {
    dispatch({
      type: 'CLOSE_DIALOG'
    });
  };
};
