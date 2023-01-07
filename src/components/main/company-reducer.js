export default function companyReducer(company, action) {
    switch (action.type) {
        case "TRANSITION":

            return [...company, action.payload]

        default:
            return company
    }


}