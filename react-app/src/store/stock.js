const SET_STOCK = 'stock/SET_STOCK';
const UPDATE_SPARK = 'stock/UPDATE_SPARK'
const REMOVE_STOCK= 'stock/REMOVE_STOCK';

const SET_TICKER = 'stock/SET_TICKER';
const SET_MOVERS = 'stock/SET_MOVERS';
const GET_STOCKS = 'stock/GET_STOCKS';
const UPDATE_PRICE = 'stock/UPDATE_PRICE'


const setStock = (stock) => ({
    type: SET_STOCK,
    payload: stock
});

const sparkUpdate = (spark) => ({
    type: UPDATE_SPARK,
    payload: spark
})

const getAllStocks = (stocks) => ({
    type: GET_STOCKS,
    payload: stocks
})

const removeStock = () => ({
    type: REMOVE_STOCK,
})

const setTicker = (ticker) => ({
    type: SET_TICKER,
    payload: ticker
})

const updatePrice = (price) => ({
    type: UPDATE_PRICE,
    payload: price
});



// ticker containing trending stocks - should get called once when portfolio loads
export const getTicker = () => async (dispatch) => {

    const response = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {

            "x-rapidapi-key": "27c4c91c34msh87bc96871d8040ep170963jsnd1b7bb2a66b6",
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
    const response = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=${symbol}&region=US`, {
        "method": "GET",
        "headers": {

            "x-rapidapi-key": "27c4c91c34msh87bc96871d8040ep170963jsnd1b7bb2a66b6",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const sparkRes = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=5m&range=1d`, {
        "method": "GET",
        "headers": {

            "x-rapidapi-key": "27c4c91c34msh87bc96871d8040ep170963jsnd1b7bb2a66b6",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    const databaseInfo = await fetch(`api/stocks/${symbol}`)

    if (response.ok && sparkRes.ok && databaseInfo.ok) {
        const stock = await response.json();
        const spark = await sparkRes.json();
        const db = await databaseInfo.json();

        if (stock.errors || spark.errors || db.errors) {
            if (stock.errors) {
                return stock.errors;
            } else if (spark.errors) {
                return spark.errors;
            } else {
                return db.errors;
            }
        }

        const sparkPrices = spark[`${symbol}`].close.map((num) => {
            return num.toFixed(2)
        })

        // building my own stock object to show only relevant info needed
        // in the store.
        const currentStock = {
            id: db.id,
            symbol: db.symbol,
            name: db.name,
            imgUrl: db.imgUrl,
            headquarters: db.headquarters,
            founded: db.founded,
            ceo: db.ceo,
            employees: db.employees,
            about: db.about,
            preMarketChange: stock.price.preMarketChange,
            preMarketChangePercent: stock.price.preMarketChangePercent,
            dayChange: stock.price.regularMarketChange,
            dayChangePercent: stock.price.regularMarketChangePercent,
            marketCap: stock.price.marketCap,
            recommendations: stock.recommendationTrend.trend,
            earnings: stock.earnings,
            // sparkline data is here
            spark: sparkPrices
        }
        
        dispatch(setStock(currentStock));
    }
}

// to change the interval and range in the sparkline graph
export const updateSpark = (symbol, int = '5m', range = '1d') => async dispatch => {
    const sparkRes = await fetch(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?symbols=${symbol}&interval=${int}&range=${range}`, {
        "method": "GET",
        "headers": {

            "x-rapidapi-key": "27c4c91c34msh87bc96871d8040ep170963jsnd1b7bb2a66b6",
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


export const addAllStocks = () => async (dispatch) => {
    const response = await fetch('/api/stocks')

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }

        dispatch(getAllStocks(data))
    }
}

export const updateStockPrice = (price) => async (dispatch) => {
    dispatch(updatePrice(price))
}

export const clearCurrentStock = () => async (dispatch) => {
    dispatch(removeStock())
}


const initialState = { allStocks: null, currentStock: null, ticker: null };

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_STOCK:
            return { ...state, currentStock: action.payload }
        case GET_STOCKS:
            return { ...state, allStocks: action.payload }
        case REMOVE_STOCK:
            return { ...state, currentStock: null }
        case SET_TICKER:
            return { ...state, ticker: action.payload }
        case UPDATE_SPARK:
            state.currentStock.spark = action.payload
            return { ...state }
        case UPDATE_PRICE:
            state.currentStock.price = action.payload
            return { ...state }
        default:
            return state;
    }
}
