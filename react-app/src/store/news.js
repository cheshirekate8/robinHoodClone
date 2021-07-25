// const moment = require('moment');

const SET_MARKET = 'watchlist/SET_MARKET';
// const SET_COMPANY = 'watchlist/SET_COMPANY';


const setMarket = (news) => ({
  type: SET_MARKET,
  payload: news
});

// const setCompany = (news) => ({
//   type: SET_COMPANY,
//   payload: news
// });

export const getNews = (symbol) => async(dispatch) => {
    if (!symbol) {
        const marketRes = await fetch('https://finnhub.io/api/v1/news?category=general&token=c3st2naad3ide69e8pk0')
        if (marketRes.ok) {
          const market = await marketRes.json()
          if (market.errors) {
              return market.errors
          }
      
          dispatch(setMarket(market))  
        }
    } 
}

const initialState = { market: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MARKET:
      return { ...state, market: action.payload }
    // case SET_COMPANY:
    //   return { ...state, company: action.payload }
    default:
      return state;
  }
}