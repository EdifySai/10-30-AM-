export default function (state = [], action) {
    console.log("I am in products reducer");
    if (action) {
        switch (action.type) {
            case 'GET_PRODUCTS': return action.payload.data;
            default: return state;
        }
    }
}
