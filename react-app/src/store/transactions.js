import * as sessionActions from './session';

const GET_TRANSACTIONS = 'transactions/GET_TRANSACTIONS';


const getAllTransactions = (transactions) => ({
    type: GET_TRANSACTIONS,
    payload: transactions
});

export const getTransactions = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/transactions`);

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }

        dispatch(getAllTransactions(data));
    }
}


export const postTransactions = ({userId, symbol, shares, total, balance, buy, sell}) => async (dispatch) => {

    const response = await fetch(`/api/users/${userId}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({symbol, total, shares, buy, sell})

    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors
        }

        dispatch(sessionActions.updateUser(userId, balance))
        dispatch(getAllTransactions(data));

    }
}



const initialState = [];

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_TRANSACTIONS:
            return state = action.payload
        default:
            return state;
    }
}

// const req = {
//     userId: 1,
//     symbol: "AAPL",
//     shares: 1,
//     total: 389.46,
//     balance: 10000
// }

// window.store.dispatch(window.transActions.postTransactions(req));
