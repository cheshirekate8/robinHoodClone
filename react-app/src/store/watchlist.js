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
// NEED TO FIND OUT IF THAT PERCENTAGE IN THE WATCHLIST ELEMENT IS THE PERCENT CHANGE FROM YESTERDAYS CLOSE?
// if it is then we can just calculate that percentage here with the candle's info instead of making another fetch call for one thing.
// the candle is only getting the data for the sparkline in the watchlist sidebar (every 5 min update for 24 hours).
export const getWatches = (userId) => async (dispatch) => {

  const response = await fetch(`/api/users/${userId}/watches`);

  
  if (response.ok) {
    const data = await response.json();
    
    if (data.errors) {
      return data.errors;
    }
    
    // get current unix timestamp
    let today = Math.floor(Date.now() / 1000);
    // get yesterday's unix timestamp
    let yesterday = today - 86400;

    const watches = {};
    data.watches.forEach(async watch => {
      // get daily stats (resolution=(the number of minutes between quotes, or d w m for day week and month))
      const candleRes = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=${watch.symbol}&resolution=5&from=${yesterday}&to=${today}&token=c3rh4jaad3i88nmlrk7g`)
      const candle = await candleRes.json();
      watch.spark = candle
      // set the price to default to the most recent close price. (will update dynamically if market is open)
      watch.price = watch.spark.c[0];
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
