export default function (state = [], action) {
    console.log("I am in weaether reducer");
    if (action) {
        switch (action.type) {
            case 'GET_WEATHER': return action.payload.data;
            default: return state;
        }
    }
}
