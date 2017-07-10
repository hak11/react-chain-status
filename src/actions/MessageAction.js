import axios from 'axios';

export const fetchMessage = () => {
  return (dispatch) => {
    axios.get('/forum')
      .then(function (response) {
        let dataResponses = Object.values(response.data);
        dispatch({type:'FETCH_COMMENT',payload:dataResponses});
      })
      .catch(err => {
        console.error('the error', err);
      });
  };
};


export const addMessage = (data) => {
  return (dispatch) => {
    console.log(data);
    console.log(dispatch);
  };
};
