const initial_state = {
    annualIncome: 0,
    baseTax: {
        first: 0
    },
    result: {
        firstCapTax: 0,
        nextCap: 0,
        progressiveTax: 0,
        total: 0,
        perMonth: 0
    },
    processing: false
}

export default function taxReducer(state = initial_state, action) {
    switch (action.type) {
        case "GET_TAX_REQUEST": {
            return {
                ...state,
                processing: true
            }
        }
        case "GET_TAX_SUCCESS": {
            return {
                ...state,
                ...action.payload,
                processing: false
            }
        }
        default: {
            return state
        }
    }
}