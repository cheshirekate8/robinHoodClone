import * as sessionActions from './session';

const GET_TRANSACTIONS = 'transactions/GET_TRANSACTIONS';


const getAllTransactions = (transactions) => ({
    type: GET_TRANSACTIONS,
    payload: transactions
});

export const getTransactions = (userId) => async (dispatch) => {
    console.log(userId)
    const response = await fetch(`/api/users/${userId}/transactions`);

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors;
        }

        dispatch(getAllTransactions(data));
    }
}

export const postTransactions = (userId, req) => async (dispatch) => {
    const { symbol, shares, total } = req
    console.log(req)
    const response = await fetch(`/api/users/${userId}/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            userId, 
            symbol, 
            shares,
            total,
        }
    });

    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return data.errors
        }
        dispatch(sessionActions.updateUser(userId, req.balance))
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