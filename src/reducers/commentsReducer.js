const FIRST_INITIAL = {
  commentOpen:false,
  notifRequired:false,
  comments:{}
};

export default (state=FIRST_INITIAL, action) => {
  switch (action.type) {
    case 'FETCH_COMMENT':
      state = {
        ...state,
        commentOpen:true,
        comments:action.payload
      };
      break;
    case 'ERROR_MESSAGE':
      state = {
        ...state,
        notifRequired:true
      };
      break;
    case 'CLOSE_DIALOG':
      state = {
        ...state,
        notifRequired:false
      };
      break;
    default:
      break;
  }
  return state;
};
