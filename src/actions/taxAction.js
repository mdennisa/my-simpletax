export const getTax = ({annualIncome}) => {
    return {
        type: "GET_TAX_REQUEST",
        payload: {
            annualIncome
        }
    }
}