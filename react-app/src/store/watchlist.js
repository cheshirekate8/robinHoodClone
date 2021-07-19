const SET_WATCH = 'session/SET_WATCH';
// const REMOVE_STOCK= 'session/REMOVE_STOCK';


const setWatch = (watch) => ({
  type: SET_WATCH,
  payload: watch
});

// const removeStock = (stock) => ({
//     type: REMOVE_STOCK,
//     payload: stock
// })


//
export const getWatches = (userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/watches`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    dispatch(setWatch(data.watches));
    console.log('successful');
  }
}


const initialState = { userWatches: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WATCH:
      return { ...state, userWatches: action.payload }
    //   case REMOVE_STOCK:
    //     return { ...state, currentStock: null }

    default:
      return state;
  }
}
