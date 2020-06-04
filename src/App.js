import React, { Component } from 'react'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTax } from './actions/taxAction'
import UIkit from 'uikit'

export class App extends Component {

    state = {
        annualValue: 0,
        inputValid: true
    }

    annualIncomeChange = (e) => {
        let inputValid = isNaN(e.target.value) ? false : true

        this.setState({
            annualValue: e.target.value,
            inputValid
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if (this.state.inputValid) {
            this.props.getTax({
                annualIncome: this.state.annualValue
            })
        } else {
            UIkit.notification({
                message: "Please input number only",
                status: "danger",
                pos: "top-center",
                timeout: 2000
            })
        }
    }

    render() {
        const { tax } = this.props

        return (
            <div className="uk-container">
                <h1 className="uk-heading-small">MY SimpleTax</h1>
                <p className="uk-text-primary">
                    Tools to calculate initial income tax before deductions or rebates for foreigner working in Malaysia
                </p>

                <div className="uk-alert uk-alert-warning">
                    NOTES
                    <br />
                    By using this tools, you can estimate how much is the amount of your income tax roughly per-month.
                    <br />
                    If you wish to get the full details of your income tax calculation, you should submit your tax via <a href="https://ez.hasil.gov.my/CI/" target="_blank">e-FILING</a>
                </div>

                <form className="uk-form" onSubmit={this.handleSubmit}>
                    <div className="uk-margin">
                        <label className="uk-label">Annual Income (Gross)</label>
                        <input className={ this.state.inputValid ? "uk-input" : "uk-input uk-form-danger" }
                            type="text" placeholder=""
                            onChange={this.annualIncomeChange}
                            value={this.state.annualValue}
                            tabIndex="0"
                        />
                    </div>
                    <div className="uk-margin">
                        <button className="uk-button uk-button-primary" type="submit">Submit</button>
                        <div className={ tax.processing === false ? "loading hide" : "loading" }>
                            <div className="uk-margin-small-left" data-uk-spinner></div>
                        </div>
                    </div>
                </form>

                <div className="uk-child-width-1-2@s uk-grid-collapse uk-text-center" data-uk-grid="">
                    <div className="uk-tile uk-tile-muted">
                        <div className="uk-text-small">
                            Tax on the first {tax.baseTax.first.toLocaleString()}
                        </div>
                        <div className="uk-text-large uk-text-bold">
                            {tax.result.firstCapTax.toLocaleString()}
                        </div>
                    </div>
                    <div className="uk-tile uk-tile-muted">
                        <div className="uk-text-small">
                            Tax on the next {tax.result.nextCap.toLocaleString()}
                        </div>
                        <div className="uk-text-large uk-text-bold">
                            {tax.result.progressiveTax.toLocaleString()}
                        </div>
                    </div>
                    <div className="uk-tile uk-tile-primary">
                        <div className="uk-text-small">
                            Total Tax (annual)
                        </div>
                        <div className="uk-text-large uk-text-bold">
                            {tax.result.total.toLocaleString()}
                        </div>
                    </div>
                    <div className="uk-tile uk-tile-primary">
                        <div className="uk-text-small">
                            Tax per month
                        </div>
                        <div className="uk-text-large uk-text-bold">
                            {tax.result.perMonth.toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapState(state) {
    return {
        tax: state.tax
    }
}

function mapDispatch(dispatch) {
    return bindActionCreators({
        getTax
    }, dispatch)
}

export default connect(mapState, mapDispatch)(App)
