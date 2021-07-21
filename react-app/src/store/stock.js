const SET_STOCK = 'stock/SET_STOCK';
const UPDATE_SPARK = 'stock/UPDATE_SPARK'
// const REMOVE_STOCK= 'stock/REMOVE_STOCK';
const SET_TICKER = 'stock/SET_TICKER';
const SET_MOVERS = 'stock/SET_MOVERS';


const setStock = (stock) => ({
  type: SET_STOCK,
  payload: stock
});

const sparkUpdate = (spark) => ({
    type: UPDATE_SPARK,
    payload: spark
})

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



// ticker containing trending stocks - should get called once when portfolio loads
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
    }
}

// all info we need to populate stock information including sparkline - should get called once when the asset page loads.
export const getStock = (symbol) => async (dispatch) => {
    console.log('symbol in store', symbol)
    const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const sparkRes = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=5m&range=1d`, {
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
            fiftyTwoWeekChange: stock.defaultKeyStatistics['52WeekChange'],
            preMarketChange: stock.price.preMarketChange,
            preMarketChangePercent: stock.price.preMarketChangePercent,
            dayChange: stock.price.regularMarketChange,
            dayChangePercent: stock.price.regularMarketChangePercent,
            marketCap: stock.price.marketCap,
            recommendations: stock.recommendationTrend.trend,
            earnings: stock.earnings,
            // sparkline data is here
            spark: spark[`${symbol}`]
        }
        // if(isWatch === true) {
        //     return currentStock;
        // }
        dispatch(setStock(currentStock));
    }
}

// to change the interval and range in the sparkline graph 
export const updateSpark = (symbol, int = '5m', range = '1d') => async dispatch => {
    const sparkRes = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=${int}&range=${range}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "935514dac0msh27373cb24d245ddp19379cjsncbd1efa902ab",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    if (sparkRes.ok) {
        const spark = await sparkRes.json();
        if (spark.errors) {
            return spark.errors;
        }
        dispatch(sparkUpdate(spark[`${symbol}`]))
    }
}

// Stocks with a lot of action today - should get called once when the portfolio page loads
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
        dispatch(setDailyMovers(data.finance.result));
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
      case UPDATE_SPARK:
          state.currentStock.spark = action.payload
          return { ...state }
      default:
        return state;
    }
}
