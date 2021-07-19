const SET_STOCK = 'session/SET_STOCK';
const REMOVE_STOCK= 'session/REMOVE_STOCK';
const SET_TICKER = 'session/SET_TICKER';
const SET_MOVERS = 'session/SET_MOVERS';

const setStock = (stock) => ({
  type: SET_STOCK,
  payload: stock
});

const removeStock = (stock) => ({
    type: REMOVE_STOCK,
    payload: stock
})

const setTicker = (ticker) => ({
    type: SET_TICKER,
    payload: ticker
})

const setDailyMovers = (movers) => ({
    type: SET_MOVERS,
    payload: movers
})


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
        const data = await response.json();
        const spark = await sparkRes.json();
        if (data.errors || spark.errors) {
            if(data.errors) {
                return data.errors;
            }
            return spark.errors;
        }
        const stock = {
            symbol: data.price.symbol,
            name: data.price.shortName,
            price: data.price.regularMarketPrice,
            fiftyTwoWeekChange: data.defaultKeyStatistics['52WeekChange'],
            preMarketChange: data.price.preMarketChange,
            preMarketChangePercent: data.price.preMarketChangePercent,
            dayChange: data.price.regularMarketChange,
            dayChangePercent: data.price.regularMarketChangePercent,
            marketCap: data.price.marketCap,
            averageVolume: data.price.averageVolume,
            about: data.summaryProfile.longBusinessSummary,
            employees: data.summaryProfile.fullTimeEmployees,
            headquarters: {
                city: data.summaryProfile.city, 
                state: data.summaryProfile.state,
            },
            recommendations: data.recommendationTrend.trend,
            earnings: data.earnings,
            spark: spark[`${symbol}`]
        }
        dispatch(setStock(stock));
    }
}

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


const initialState = { stock: null, ticker: null, dailyMovers: null};

export default function reducer(state = initialState, action) {
    switch (action.type) {
      case SET_STOCK:
        return { ...state, stock: action.payload }
      case REMOVE_STOCK:
        return { ...state, stock: null }
      case SET_TICKER:
          return { ...state, ticker: action.payload }
      case SET_MOVERS:
          return { ...state, dailyMovers: action.payload }
      default:
        return state;
    }
}