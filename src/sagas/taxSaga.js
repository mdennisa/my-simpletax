import { takeLatest, call, put, delay } from 'redux-saga/effects'
import { baseTax } from '../baseTax'

// helpers
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// API simulator with promise
function getTaxCap({annualIncome}) {
    let income = Number(annualIncome)
    let annualCap = 5000
    let bt = {}

    if (income > 5000 && income <= 20000) {
        annualCap = 20000
    } else if (income > 20000 && income <= 35000) {
        annualCap = 35000
    } else if (income > 35000 && income <= 50000) {
        annualCap = 50000
    } else if (income > 50000 && income <= 70000) {
        annualCap = 70000
    } else if (income > 70000 && income <= 100000) {
        annualCap = 100000
    } else if (income > 100000 && income <= 250000) {
        annualCap = 250000
    } else if (income > 250000 && income <= 400000) {
        annualCap = 400000
    } else if (income > 400000 && income <= 1000000) {
        annualCap = 1000000
    } else if (income > 1000000 && income <= 2000000) {
        annualCap = 2000000
    } else if (income > 2000000) {
        annualCap = 3000000
    }

    bt = baseTax.find((b) => b.annualCap === annualCap )
    let tax = {
        firstCapTax: bt.taxOnFirst,
        nextCap: Number(income - bt.first)
    }
    tax.progressiveTax = round(Number(tax.nextCap * bt.nextTax), 2)
    tax.total = round(Number(tax.firstCapTax + tax.progressiveTax), 2)
    tax.perMonth = round(Number(tax.total/12), 2)

    return Promise.resolve({
        annualIncome: income,
        baseTax: bt,
        result: tax
    })
}

// GENERATORS & WATCHERS
function* getTax(action) {
    const result = yield call(getTaxCap, {
        annualIncome: action.payload.annualIncome
    })
    yield delay(1000)
    yield put({
        type: "GET_TAX_SUCCESS",
        payload: {
            ...result
        }
    })
}

export function* watchGetTax() {
    yield takeLatest('GET_TAX_REQUEST', getTax)
}