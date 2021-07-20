import { getStock } from './stock'


const SET_WATCH = 'watchlist/SET_WATCH';
const UPDATE_PRICE = 'watchlist/UPDATE_PRICE'
// const REMOVE_STOCK= 'session/REMOVE_STOCK';


const setWatch = (watch) => ({
  type: SET_WATCH,
  payload: watch
});

const updatePrice = (symbol, price) => ({
  type: UPDATE_PRICE,
  payload: {
    symbol,
    price
  }
})

// const removeStock = (stock) => ({
//     type: REMOVE_STOCK,
//     payload: stock
// })


// Get all watches for a user.
export const getWatches = (userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/watches`);

  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
    const watches = {};
    data.watches.forEach(watch => {
      watch.price = 0
      watches[watch.symbol] = watch;

    })
    dispatch(setWatch(watches));
  }
}

// Update the price for a single stock in the watchlist.
export const updateWatchPrice = (symbol, price) => async(dispatch) => {
  dispatch(updatePrice(symbol, price))
}


const initialState = { userWatches: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WATCH:
      return { ...state, userWatches: action.payload }
    //   case REMOVE_STOCK:
    //     return { ...state, currentStock: null }
    case UPDATE_PRICE:
      // set the price of the stock with the key of the symbol in the payload.
      state.userWatches[action.payload.symbol].price = action.payload.price
      return {...state};
    default:
      return state;
  }
}
