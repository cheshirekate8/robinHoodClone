const SET_STOCK = 'session/SET_STOCK';
// const REMOVE_STOCK= 'session/REMOVE_STOCK';
const SET_TICKER = 'session/SET_TICKER';
const SET_MOVERS = 'session/SET_MOVERS';

const setStock = (stock) => ({
  type: SET_STOCK,
  payload: stock
});

// const removeStock = (stock) => ({
//     type: REMOVE_STOCK,
//     payload: stock
// })

const setTicker = (ticker) => ({
    type: SET_TICKER,
    payload: ticker
})

const setDailyMovers = (movers) => ({
    type: SET_MOVERS,
    payload: movers
})

// ticker containing trending stocks
export const getTicker = () => async (dispatch) => {

    const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        dispatch(setTicker(data.finance.result[0]));
        console.log('successful');
    }
}

// all info we need to populate stock information including sparkline
export const getStock = (symbol) => async (dispatch) => {
    const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const sparkRes = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=1m&range=1d`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    if (response.ok && sparkRes.ok) {
        const stock = await response.json();
        const spark = await sparkRes.json();
        if (stock.errors || spark.errors) {
            if(stock.errors) {
                return stock.errors;
            }
            return spark.errors;
        }
        // building my own stock object to show only relevant info needed
        // in the store.
        const currentStock = {
            symbol: stock.price.symbol,
            name: stock.price.shortName,
            price: stock.price.regularMarketPrice,
            fiftyTwoWeekChange: stock.defaultKeyStatistics['52WeekChange'],
            preMarketChange: stock.price.preMarketChange,
            preMarketChangePercent: stock.price.preMarketChangePercent,
            dayChange: stock.price.regularMarketChange,
            dayChangePercent: stock.price.regularMarketChangePercent,
            marketCap: stock.price.marketCap,
            averageVolume: stock.price.averageVolume,
            about: stock.summaryProfile.longBusinessSummary,
            employees: stock.summaryProfile.fullTimeEmployees,
            headquarters: {

                city: stock.summaryProfile.city, 
                state: stock.summaryProfile.state,
            },
            recommendations: stock.recommendationTrend.trend,
            earnings: stock.earnings,
            // sparkline data is here
            spark: spark[`${symbol}`]
        }
        dispatch(setStock(currentStock));
    }
}

// Stocks with a lot of action today
export const getDailyMovers = () => async (dispatch) => {
    const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&count=4&start=0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
        dispatch(setDailyMovers(data.finance));
    }
}


const initialState = { currentStock: null, ticker: null, dailyMovers: null};

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_STOCK:
        return { ...state, currentStock: action.payload }
    //   case REMOVE_STOCK:
    //     return { ...state, currentStock: null }
      case SET_TICKER:
          return { ...state, ticker: action.payload }
      case SET_MOVERS:
          return { ...state, dailyMovers: action.payload }
      default:
        return state;
    }
}
