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
    } else {}
    // } else {
    //     // If we get a chance to come back to this, get company specific news for the asset page
    //     // this isn't working because It's not liking the api key, but it's definitely correct
    //     // so not sure how to fix.
    
    //         // create the date for today, and create a date for 6 months prior (i miss pythons tuples)
    //         const date = moment().format('YYYY-MM-DD')
    //         const month = date.slice(5,7)
    //         const months = [['01', '06'], ['02', '07'], ['03', '08'], ['04', '09'], ['05', '10'], ['06', '11'], ['07', '12'], ['08', '01'], ['09', '02'], ['10', '03'], ['11', '04'], ['12', '05']];
    //         const monthFilter = months.filter( arr => arr[0] === month )
    //         const pastMonth = monthFilter.flat()[1]
    //         const pastDate = date.slice(0,4) + '-' + pastMonth + '-' + date.slice(8,10)
        
            
    //             const companyRes = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${pastDate}&to=${date}&token=c3st2naad3ide69e8pk0`)
    //             if (companyRes.ok) {
    //                 const company = await companyRes.json()
    //                 if (company.errors) {
    //                     return company.errors
    //                 }
    //                 dispatch(setCompany(company))
    //             }        
    // }
}

const initialState = { market: null, company: null };

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